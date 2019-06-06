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
      }, // end of story
      {
        title: "The Gale crater",
        label: "the-gale-crater",
        thumbnail: "http://www.lozano-hemmer.com/image_sets/method_random/method_random2.jpg",
        map: {
          default: "opm_mars",
        },
        episodes: [

          {
            "title": "Why mapping Mars today?",
            "text": "Looking for the geological past of Mars is important for us for several reasons: understand what happens on Mars, and how this planet differs from ours? Did Life emerge at its surface, and if yes, for how long? Are Life-compliant conditions still present somewhere on Mars? And of course, to prepare future manned exploration missions: where to land safely and make the most science? That’s where geological mapping comes into play",
          },

          {
            "order": 1,
            "title": "Historic mapping",
            "text": "We tried to map the surface of Mars for quite a long time, trying and figuring out what this world could look like: Is it like our Earth? Do other living beings populate it?\nFirst maps were drawn during the 19th century using direct observation with telescopes by famous astronomers Sciaparelli, Flammarion or Antoniadi.\nToday, our quest for the geological past of Mars continues, on a much finer scale.",
            "media": [
              {
                "type": "image/jpeg",
                "path": "/stories/mars/gale_crater/media/sciaparelli_1879.jpg"
              },
              {
                "type": "image/jpeg",
                "path": "/stories/mars/gale_crater/media/Flammarion_antoniadi_1900.jpg",
              },
              {
                "type": "image/jpeg",
                "path": "/stories/mars/gale_crater/media/antoniadi_1910.jpg",
              }
            ]
          },

          {
            "order": 2,
            "title": "The Gale Crater",
            "text": "Gale Crater is situated near the Martian equator. Produced by an impact some 3.7 billion years ago, this crater has known a long story since then, hosting varied environments that changed through time. We study it because it may have supported Life-compliant conditions at one point.\nTech Data crater:\nDiameter: 154 km\nDepth: ~3000 m\nNature: Impact crater\nAge: ~3.8/3.6 Ga\nNamesake: Walter Frederick Gale",
            "media": {
              "path": "/stories/mars/gale_crater/media/Gale.jpg",
              "type": "image/jpeg"
            },
            map: {
              // extent: "gale crater"
            }
          },

          {
            "order": 3,
            "title": "Orbital mapping of Gale plains",
            "text": "Orbital observations give us a very precise view of the surface, its composition and therefore its history. Thus, we can differentiate what we call “orbital facies”: a series of characteristics that define a terrain and tells us more about its formation and evolution through time. For example, in red, the cratered surface are the oldest terrains, having suffered heavy meteoritic bombardments. In kaki, the most recent terrains represent active dune fields, showing natural aeolian processes similar to those on Earth are happening at this very moment on Mars.",
            // "map": {
            //   "layer": {
            //     path: geoserver/wms/"Grotzinger_2014_orbital facies + Gale MSL area",
            //     type: wms
            //   },
            //   "view": {
            //     "extent": "orbital facies",
            //   }
            // }
          },

          {
            "order": 4,
            "title": "A Martian geologist: Curiosity",
            "text": "Orbital data are key to our work, but nothing can replace the ground truth. That’s why we sent Mars Science Laboratory rover Curiosity on Mars.\nCuriosity is a true field geologist. Equipped with high-resolution cameras, microscopes and an entire geochemical lab, this rover allows us to remotely study the terrains encountered in Gale Crater. Using its data, we can learn what kind of rocks are present in Gale, their exact chemical composition or their structures. All these information are important for us understand the paleoenvironmental conditions which they were deposited under, billions of years ago.",
            "media": {
              "path": "/stories/mars/gale_crater/media/Curiosity_static.glb",
              "type": "model/gltf-binary"
            },
            // "map": {
            //   view: {
            //     extent: "extent to Gale MSL area"
            //   },
            //   layer: {
            //     path: "Gale MSL area",
            //     type: wms
            //   }
            // }
          },

          {
            "order": 5,
            "title": "Curiosity’s traverse",
            "text": "Since august 2012 when it landed on the Red planet at Bradbury, Curiosity travelled about 20 km southwestward. Along the way, the science team behind the rover kept unravelling geological mysteries and deciphering the fluvio-deltaic and lacustrine past of the Gale Crater.",
            // "map": {
            //   "layer": {
            //     path: geoserver/"Bradbury landing + MSL_traverse_points + HiRISE basemap"
            //     type: wms/layer-group
            //   },
            //   "view": {
            //     extent: "extent to Gale MSL area"
            //   }
            // }
          },

          {
            "order": 6,
            "title": "Kimberley outcrop",
            "text": "Along the road, in 2014, Curiosity stopped at the Kimberley outcrop to do some Geology at this beautiful place. Look, you can even spot the rover on the satellite picture!",
            // "map": {
            //   "layer": {
            //     "path": http://geoserver.planmap.eu/wms/"HiRISE Kimberley color crop basemap + Arrow",
            //     "type": LayerGroup/WMS
            //   }
            //   "view": {
            //     "extent": "Zoom to Kimberley outcrop at 1:800",
            //   }
            // }
          },

          {
            "order": 7,
            "title": "Kimberley outcrop",
            "text": "Sedimentary rocks of this place belong to the Bradbury Group, an ensemble of sandstones that were deposited about 3.4-3.6 billion years ago, when rivers ran across the crater.",
            "media": {
              "type": "image/jpeg",
              "path": "/stories/mars/gale_crater/media/Kimberley.jpg"
            }
            // "map": {
            //   "view": {
            //     "extent": "SAME-AS-PREVIOUS",
            //   }
            // }
          },

          {
            "order": 8,
            "title": "Future mapping work on Kimberley",
            "text": "While Curiosity is not at Kimberley any longer, the geological mapping continues! Geologists are currently developing new technologies to improve study and mapping of Mars, by reconstructing in 3D and in Virtual Reality outcrops like Kimberley!",
            "media": {
              "path": "/stories/mars/gale_crater/media/Kimberley_300k_light.glb",
              "type": "model/gltf-binary",
            }
          }
        ]
      }
    ]
  }
]
export { stories_collection };
