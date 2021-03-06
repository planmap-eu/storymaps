import './leaflet/mouse_position.js';
import './leaflet/mouse_position.css';

class Map {
  constructor() {
    this._map = null;
    this._data = null;
    this._overlay = null;
  }

  getMap() {
    return this._map;
  }

  clean() {
    if (this._map) {
      this._map.off();
      this._map.eachLayer(function(layer) {
        layer.remove();
      });
      this._map.remove();
      this._map = null;
    }
  }

  build(map_settings, element) {
    console.log(map_settings, element)

    var map = L.map(element, map_settings.options);
    L.control.mousePosition({
      lngFirst:true,
      prefix:'Lon/Lat:',
      separator: ' / '
    }).addTo(map);

    var extent = map_settings.extent;
    console.log(`Map settings extent: ${extent}`);
    if (extent) {
      map.fitBounds([
        [extent[0], extent[1]],
        [extent[2], extent[3]]
      ]);
    } else {
      var center = map_settings.center;
      if (!center) {
        center = [0, 0];
      }
      console.log(`Map settings center: ${center}`);
      map.setView(center, 3);
    }

    L.tileLayer(map_settings.url).addTo(map);
    this._map = map;
    if (map_settings.layers) {
      this.setLayers(map_settings.layers);
    }
  }

  update(params) {
    if (params) {
      var map = this._map;
      if (map) {
        var view = params.view;
        if (view) {
          var extent = view.extent;
          console.log(`View extent: ${extent}`);
          if (extent) {
            map.flyToBounds([
              [extent[1], extent[0]],
              [extent[3], extent[2]]
            ]);
          }
          var marker = view.marker;
          if (marker) {
            console.log(`Marker position: ${marker}`);
            L.marker([marker[1], marker[0]]).addTo(map);
          }
        }
        var layers = params.layers;
        if (layers) {
          this.setLayers(layers);
        }
      }
    }
  }

  setLayers(layers) {
    console.log('Setting new layers(group)');
    var overlay = new L.FeatureGroup();
    layers.forEach(({path,credits,type,name,style}) => {
      var layer;
      if (type == 'tms') {
        var url = path + '/{z}/{x}/{y}.png';
        console.log(`TMS url: ${url}`);
        layer = new L.tileLayer(url, {
          tms: true,
          opacity: 0.9,
          attribution: credits
        });
        if (!!layer) {
          overlay.addLayer(layer);
        }
      } else if (type == 'geojson') {
        var url = path;
        console.log(`GeoJSON url: ${url}`);
        $.getJSON(url).then(function(geojson) {
          layer = new L.geoJSON(geojson, {
            attribution: credits
          });
          overlay.addLayer(layer);
        })
      } else if (type == 'wms' && !!name) {
        var url = path + "?";
        console.log(`WMS url: ${url}`);
        layer = new L.tileLayer.wms(path, {
          layers: name,
          styles: style ? style : '',
          transparent: true,
          format: 'image/png',
          opacity: 0.5,
          credits: credits
        });
        overlay.addLayer(layer);
      } else {
        console.error(`Type '${type}' not supported!`);
      }
    });
    console.log(`Overlay: ${overlay}`);
    this.setOverlay(overlay);
  }

  setOverlay(overlay) {
    if (this._overlay) {
      this._map.removeLayer(this._overlay);
    }
    overlay.addTo(this._map);
    this._overlay = overlay;
  }
}

var map = new Map();
export {
  map
};
