// var glob = require("glob");
//
// var stories_collection = [];
// for (let body of ['mars', 'mercury', 'moon']) {
//   var pattern = './' + body + '/*.json';
//   var stories = []
//   glob.sync(pattern).forEach((filename) => {
//     var json = require(filename);
//     stories.push({filename: json});
//   })
//   stories_collection.push({body: stories})
// }

var stories_collection = [
  { body: 'mars',
    stories: [
      {
        title: "The Story Title",
        label: "the-story-label",
        thumbnail: "an image to show in the list of stories in the entry-page",
        map: {
          default: "opm_mars",
          extent: [0, 0, 50, 50],
        },
        episodes: [
          {
            "title": "episode 1",
            "thumbnail": "a small image to show in the list of episodes",
            "text": "some text, something 300~500 should be ok",
            "media": [
              {
                "path": "https://data.planmap.eu/pub/mars/PM-MAR-C-Arsinoes_01/document/PM-MAR-C-Arsinoes_01_frt00008233_07_if164s_trr3_FEM.browse.png",
                "type": "image/png"
              },
              {
                "path": "https://www.youtube.com/embed/ZdQweZuxR3E",
                "type": "video/youtube"
              },
              {
                "path": "/some/path/to/mesh.glb",
                "type": "model/gltf-binary"
              }
            ],
            "map": {
              "layer": {
                "path": "/some/path/to/features.json",
                "type": "application/json"
              },
              extent: [0, 0, 10, 10],
              marker: [5, 5]
            }
          },
          {
            "title": "episode 2",
            "thumbnail": "a small image to show in the list of episodes",
            "text": "some text, something 300~500 should be ok",
            "media": [
              {
                "path": "/some/path/to/image.png",
                "type": "image/png"
              },
              {
                "path": "https://youtube.com/some-video",
                "type": "video/youtube"
              },
              {
                "path": "/some/path/to/mesh.glb",
                "type": "model/gltf-binary"
              }
            ],
            "map": {
              "layer": {
                "path": "/some/path/to/features.json",
                "type": "application/json"
              },
              extent: [-10, 0, 10, 10],
              marker: [0, 0]
            }
          }
        ]
      }
    ]
  }
]
export { stories_collection };
