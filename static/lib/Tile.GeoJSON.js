L.TileGeoJSON = L.TileLayer.GeoJSON.extend({
  initialize: function (url, options, geojsonOptions) {
    L.TileLayer.Ajax.prototype.initialize.call(this, url, options);
    // debugger
    this.geojsonLayer = Tangram.leafletLayer({
      scene: "",
      zIndex: 3,
    });
  },
  onAdd: function (map) {
    this._map = map;
    L.TileLayer.Ajax.prototype.onAdd.call(this, map);
    this.geojsonLayer.addTo(map);
  },
  addTileData: function (geojson, tilePoint) {
    // debugger
    var geojsons = {
      water: {
        features: geojson.features,
        type: "FeatureCollection"
      },
    };
    for (var i = 0; i < geojsons.water.features.length; i++) {
      geojsons.water.features[i].properties = {
        "source": "openstreetmapdata.com",
        "kind": "ocean",
        "name": "",
        "area": 7412980745,
        "sort_rank": 200,
        "min_zoom": 0
      };
    }
    console.log(CONFIG.GeoJSON);
    var layer = Tangram.leafletLayer({
      scene: {
        cameras: {
          camera1: {
            type: "perspective"
          }
        },
        lights: {
          light1: {
            type: "directional",
            direction: [0, 1, "-.5"],
            diffuse: 0.3,
            ambient: 1
          }
        },
        sources: {
          mapzen: {
            type: "TopoJSON",
            url: "https://tile.mapzen.com/mapzen/vector/v1/all/{z}/{x}/{y}.topojson",
            url_params: {
              api_key: "mapzen-tDHBHDp"
            },
            max_zoom: 16
          }
        },
        layers: {
          water: {
            data: {
              source: "osm"
            },
            draw: {
              polygons: {
                order: "function() { return feature.sort_rank; }",
                color: "#88bbee"
              }
            }
          }
        },
      }
    });
    layer.scene.subscribe({
      load: () => {
        layer.scene.setDataSource('osm', {
          type: 'GeoJSON',
          data: geojsons
        });
      },
      view_complete: () => {}
    });
    layer.addTo(this._map);
    // this._map.removeLayer(layer);
    return this;
  },
  _tileLoaded: function (tile, tilePoint) {
    if (tile.datum === null) {
      return null;
    }
    this.addTileData(tile.datum, tilePoint);
  },
});

L.tilegeojson = function (url, options) {
  debugger
  // console.log("end2")
  return new L.TileGeoJSON(url, options);
};
