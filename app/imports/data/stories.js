var glob = require("glob");

var stories_collection = [];
for (let body of ['mars', 'mercury', 'moon']) {
  var pattern = '/stories/' + body + '/*.json';
  var stories = []
  glob.sync(pattern).forEach((filename) => {
    var json = require(filename);
    stories.push({filename: json});
  }
  stories_collection.push({body: stories})
}

export { stories_collection };
