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

  build(story, element) {
    var extent = story.map.extent;
    var map = L.map(element).fitBounds(extent);

    var url = story.map.layer.path;
    var bm = new L.tileLayer(url);
    bm.addTo(map);

    this._map = map;
  }
}
