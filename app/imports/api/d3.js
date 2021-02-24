class SketchfabAPI {
  constructor() {
    this._api = null;
  }

  getAPI() {
    return this._api;
  }

  setAPI(api) {
    this._api = api;
  }

  // clean() {
  //   if (this._map) {
  //     this._map.off();
  //     this._map.eachLayer(function(layer) {
  //       layer.remove();
  //     });
  //     this._map.remove();
  //     this._map = null;
  //   }
  // }

  gotoAnnotation(index) {
    if (this._api) {
      this._api.gotoAnnotation(parseInt(index),
          {preventCameraAnimation: false, preventCameraMove: false},
          function(err, idx) {
            if (!err) {
              console.log('Going to annotation', idx + 1);
            }
          }
      );
    }
  }
}

var d3 = new SketchfabAPI();
export { d3 };
