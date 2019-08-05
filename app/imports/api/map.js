var default_maps = {
  opm_mars: {
    url: "http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-gray/{z}/{x}/{y}.png",
    options: {
      crs: L.CRS.EPSG3857,
      maxNativeZoom: 9,
      tms: true,
      autoZIndex: true,
      attribution: "<a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
    },
  },
  opm_moon: {
    url: "https://s3.amazonaws.com/opmbuilder/301_moon/tiles/w/hillshaded-albedo/{z}/{x}/{y}.png",
    options: {
      crs: L.CRS.EPSG3857,
      maxNativeZoom: 9,
      tms: false,
      autoZIndex: true,
      attribution: "<a href='https://astrogeology.usgs.gov/search/map/Moon/LMMP/LOLA-derived/Lunar_LRO_LOLA_Shade_Global_128ppd_v04' target='_blank'>LOLA/USGS</a>"
    },
  }
}

class Map {
  constructor() {
    this._map = null;
    this._data = null;
  }

  getMap() {
    return this._map;
  }

  clean() {
    if (this._map ){
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

    var map = L.map(element);

    var extent = map_settings.extent;
    console.log(extent);
    if (extent) {
      map.fitBounds([[extent[0], extent[1]],[extent[2], extent[3]]]);
    } else {
      map.setView([0, 0], 2);
    }

    if (map_settings.default) {
      var def = default_maps[map_settings.default];
      L.tileLayer(def.url, def.options).addTo(map);
    } else {
      L.tileLayer.wms(map_settings.layer.url, map_settings.layer.options).addTo(map);
    }

    this._map = map;
  }

  update(params) {
    if (params) {
      var map = this._map;
      if (params.extent) {
        var extent = params.extent;
        map.fitBounds([[extent[0],extent[1]],[extent[2],extent[3]]]);
      }
      if (params.marker) {
        var marker = params.marker;
        L.marker(marker).addTo(map);
          // .bindPopup('A marker.')
          // .openPopup();
      }
      if (params.layer) {
        // Add the layer. Layers can be GeoJSON, WMS or WFS.
      }
    }
  }
}

var map = new Map();
export { map };
