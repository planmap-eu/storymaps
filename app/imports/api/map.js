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
    var extent = map_settings.extent;
    console.log(extent);
    var map = L.map('mapcontainer')
      .setView([0, 0], 2);
      // .fitBounds([[extent[0], extent[1]],[extent[2], extent[3]]]);

    var url = map_settings.layer.path;
    L.tileLayer(url, {
        maxNativeZoom: 9,
        tms: map_settings.layer.type == "tms",
        autoZIndex: true,
        attribution: "<a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>"
    }).addTo(map);

    // L.marker([0, 0]).addTo(map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();

    this._map = map;
  }

  update({layer, extent, marker}) {
    var map = this._map;
    if (extent) {
      map.fitBounds([[extent[0],extent[1]],[extent[2],extent[3]]]);
    }
    if (marker) {
      L.marker(marker).addTo(map)
        .bindPopup('A marker.')
        .openPopup();
    }
  }
}

var map = new Map();
export { map };
