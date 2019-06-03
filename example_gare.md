Example with the Mars' Gare Crater story-map (https://wiki.planmap.eu/display/planmap/Gale+Crater+mapping+Story+Map).

* Current model: [Data structure - v2](#data-structure---v2)

## Data structure - v1

```
{
  "title": "The Gale Crater storymap",
  "basemap": {
    "url": "https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png",
    "type": "tms"
  },
  "chapters": [
    {
      "order": 0,
      "title": "Why mapping Mars today?",
      "text": "Looking for the geological past of Mars is important for us for several reasons: understand what happens on Mars, and how this planet differs from ours? Did Life emerge at its surface, and if yes, for how long? Are Life-compliant conditions still present somewhere on Mars? And of course, to prepare future manned exploration missions: where to land safely and make the most science? That’s where geological mapping comes into play",
      "media": null
    },
    {
      "order": 1,
      "center": null,
      "title": "Historic mapping",
      "text": "We tried to map the surface of Mars for quite a long time, trying and figuring out what this world could look like: Is it like our Earth? Do other living beings populate it?\nFirst maps were drawn during the 19th century using direct observation with telescopes by famous astronomers Sciaparelli, Flammarion or Antoniadi.\nToday, our quest for the geological past of Mars continues, on a much finer scale.",
      "media": [
        {
          "stoptime": 10,
          "type": "image/jpeg",
          "path": "/stories/mars/gale_crater/media/sciaparelli_1879.jpg",
          "caption": undefined,
        },
        {
          "stoptime": 10,
          "type": "image/jpeg",
          "path": "/stories/mars/gale_crater/media/Flammarion_antoniadi_1900.jpg",
          "caption": undefined,
        },
        {
          "stoptime": 10,
          "type": "image/jpeg",
          "path": "/stories/mars/gale_crater/media/antoniadi_1910.jpg",
          "caption": undefined,
        }
      ]
    },
    {
      "order": 2,
      "extent": "gale crater bbox",
      "title": "The Gale Crater",
      "text": "Gale Crater is situated near the Martian equator. Produced by an impact some 3.7 billion years ago, this crater has known a long story since then, hosting varied environments that changed through time. We study it because it may have supported Life-compliant conditions at one point.\nTech Data crater:\nDiameter: 154 km\nDepth: ~3000 m\nNature: Impact crater\nAge: ~3.8/3.6 Ga\nNamesake: Walter Frederick Gale",
      "media": {
        "stoptime": undefined,
        "path": "/stories/mars/gale_crater/media/Gale.jpg",
        "type": "image/jpeg"
       }
    },
    {
      "order": 3,
      "extent": "orbital facies",
      "title": "Orbital mapping of Gale plains",
      "text": "Orbital observations give us a very precise view of the surface, its composition and therefore its history. Thus, we can differentiate what we call “orbital facies”: a series of characteristics that define a terrain and tells us more about its formation and evolution through time. For example, in red, the cratered surface are the oldest terrains, having suffered heavy meteoritic bombardments. In kaki, the most recent terrains represent active dune fields, showing natural aeolian processes similar to those on Earth are happening at this very moment on Mars."
    },
    {
      "order": 4,
      "title": "A Martian geologist: Curiosity",
      "extent": ,
      "text": "Orbital data are key to our work, but nothing can replace the ground truth. That’s why we sent Mars Science Laboratory rover Curiosity on Mars.\nCuriosity is a true field geologist. Equipped with high-resolution cameras, microscopes and an entire geochemical lab, this rover allows us to remotely study the terrains encountered in Gale Crater. Using its data, we can learn what kind of rocks are present in Gale, their exact chemical composition or their structures. All these information are important for us understand the paleoenvironmental conditions which they were deposited under, billions of years ago.",
      "media": {
        "type": "model/gltf-binary",
        "path": "/stories/mars/gale_crater/media/Curiosity_static.glb",
        "stoptime": undefined
      }
    },
    {
      "order": 5,
      "extent": ,
      "title": "Curiosity’s traverse",
      "text": "Since august 2012 when it landed on the Red planet at Bradbury, Curiosity travelled about 20 km southwestward. Along the way, the science team behind the rover kept unravelling geological mysteries and deciphering the fluvio-deltaic and lacustrine past of the Gale Crater.",
    },
    {
      "order": 6,
      "title": "Kimberley outcrop",
      "extent": "Zoom to Kimberley outcrop at 1:800",
      "text": "Along the road, in 2014, Curiosity stopped at the Kimberley outcrop to do some Geology at this beautiful place. Look, you can even spot the rover on the satellite picture!",
      "media": {}
    },
    {
      "order": 7,
      "title": "Kimberley outcrop",
      "extent": "same",
      "text": "Sedimentary rocks of this place belong to the Bradbury Group, an ensemble of sandstones that were deposited about 3.4-3.6 billion years ago, when rivers ran across the crater.",
      "media": {
        "type": "image/jpeg",
        "path": "/stories/mars/gale_crater/media/Kimberley.jpg"
      }
    },
    {
      "order": 8,
      "title": "Future mapping work on Kimberley",
      "extent": undefined,
      "text": "While Curiosity is not at Kimberley any longer, the geological mapping continues! Geologists are currently developing new technologies to improve study and mapping of Mars, by reconstructing in 3D and in Virtual Reality outcrops like Kimberley!",
      "media": {
        "type": "model/gltf-binary",
        "path": "/stories/mars/gale_crater/media/Kimberley_300k_light.glb",
        "stoptime": undefined
      }
    }
  ]
}
```

### Notes

#### Step 0
The first chapter of the story has no media associated, neither a position/location to focus on,
It seems the author is thinking about an introductory full page at this moment.

#### Step 4
There is no media associated, but apparently Gwenael wants to highlight a particular vector layer/map on top of the background map. On one hand, we could/should associate a media anyways, which would be the figure of the particular map ("Grotzinger_2014_orbital facies” and “Gale MSL area” layers). On the other hand, a section in the JSON/chapter block needs to be responsible for triggering features in the map: a GeoJSON structure could handle it; the only "problem" is that GeoJSONs store features themselves, not links to maps.

#### Step 5
> Basemap “Gale MSL area”. Display “Bradbury landing” layer with label (marking “Bradbury landing”), and display “MSL_traverse_points” layer, without labels, to mark the traverse onto the HiRISE basemap.
Again, we need a thumbnail of the corresponding map.

#### Step 6
>  with HiRISE color basemap “Kimberley color crop” layer. Display “Arrow” layer.
Again, media with picture of map of interest (i.e., Kimberley + Arrow), and corresponding layers over the basemap


### Data

#### Step 1
* media
  * sciaparelli_1879: https://cloud.planmap.eu/index.php/f/17841
  * flammarion_antoniadi_1900: https://cloud.planmap.eu/index.php/f/17838
  * antoniadi_1910: https://cloud.planmap.eu/index.php/f/17833

#### Step 2
* map:
  * extent/zoom to Gale
* media:
  * Gale: https://cloud.planmap.eu/index.php/f/17839
  
#### Step 3
* map:
  * Grotzinger_2014_orbital facies map: https://cloud.planmap.eu/index.php/f/17899
  * Gale MSL area: https://cloud.planmap.eu/index.php/f/17898
  
#### Step 4
* media:
  * Curiosity_static: https://cloud.planmap.eu/index.php/f/17837
* map:
  * Gale MSL area: https://cloud.planmap.eu/index.php/f/17898

#### Step 5
* media:
  * Curiosity_static: https://cloud.planmap.eu/index.php/f/17837
* map:
  * extent to Gale MSL area: https://cloud.planmap.eu/index.php/f/17898
  * “Bradbury landing” layer + "Bradbury landing" layer
  * MSL_traverse_points
  * HiRISE basemap
  
#### Step 6
* map:
  * extent to "Kimberley outcrop at 1:800"
  * HiRISE "Kimberley color crop" basemap
  * Arrow layer
  
#### Step 7
* map:
  * extent to "Kimberley outcrop at 1:800"
* media:
  * pano Kimberley: https://cloud.planmap.eu/index.php/f/17840
  
#### Step 8
* media:
  * Kimberley_300k_light: https://cloud.planmap.eu/index.php/f/17834
  
  
  
### About geometries

Each chapter may have a geometry associated to it. For instance, if we are telling the story of Curiosity traversing some surface feature we will use points over a line to locate the steps of the rover through the story. In this case, for instance, each chapter could be very similar to a GeoJSON node and use a `geometry` structure with `Point`s:
```
geometry: {
  coordinates: ["longitude", "latitude"]
  type: Point
}
```
On the other hand, if pinpointing a specific location is not part of the chapter, but instead a whole area (a crater, for example), then an "extent" information looks a better choice.


## Data structure - v2

It is clear that each stop/chapter is composed by the content that goes to the sidebar/popup/modal (a `div` in general), and a map layer.

Previously, it has been discussed about using a GeoJSON as the data structuring holding the story content, which seems to work very well for traverses, but doesn't seem to work for when we need complex, varied features -- like in a (vector) map --, where a whole `FeaturesCollection` (in GeoJSON terms) would be necessary.

We may think on a structure where each stop is composed by a `map` section besides `text`, `media` and `title`. That being the case, each episode template would be:
```
title: "short title",
text: "some text",
media: [
  {
    path: /some/path/to/image.png,
    type: image/png
  },
  {
    url: https://youtube.com/some-video,
    type: video/youtube
  },
  {
    path: /some/path/to/mesh.glb,
    type: model/gltf-binary
  }
],
map: {
  layer: {
    path: /some/path/to/features.json,
    type: geojson
  },
  view: {
    extent: [xmin, ymin, xmax, ymax],
    marker: [x, y]
  }
}
```   

Example ([Mars' Gare Crater](https://wiki.planmap.eu/display/planmap/Gale+Crater+mapping+Story+Map)) with current structure:
```
{
```
**TBD:**
>  "title": "The Gale Crater storymap",
>  "body": "Mars",
>  "view": {
>    "lat": [-6,-5], 
>    "lon": [137,138]
>  },  

```
  "chapters": [
  
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
      "map": {
        "view": {
          "extent": "gale crater"
        }
      }
    },
    
    {
      "order": 3,
      "title": "Orbital mapping of Gale plains",
      "text": "Orbital observations give us a very precise view of the surface, its composition and therefore its history. Thus, we can differentiate what we call “orbital facies”: a series of characteristics that define a terrain and tells us more about its formation and evolution through time. For example, in red, the cratered surface are the oldest terrains, having suffered heavy meteoritic bombardments. In kaki, the most recent terrains represent active dune fields, showing natural aeolian processes similar to those on Earth are happening at this very moment on Mars.",
      "map": {
        "layer": {
          path: geoserver/wms/"Grotzinger_2014_orbital facies + Gale MSL area",
          type: wms
        },
        "view": {
          "extent": "orbital facies",
        }
      }
    },
    
    {
      "order": 4,
      "title": "A Martian geologist: Curiosity",
      "text": "Orbital data are key to our work, but nothing can replace the ground truth. That’s why we sent Mars Science Laboratory rover Curiosity on Mars.\nCuriosity is a true field geologist. Equipped with high-resolution cameras, microscopes and an entire geochemical lab, this rover allows us to remotely study the terrains encountered in Gale Crater. Using its data, we can learn what kind of rocks are present in Gale, their exact chemical composition or their structures. All these information are important for us understand the paleoenvironmental conditions which they were deposited under, billions of years ago.",
      "media": {
        "path": "/stories/mars/gale_crater/media/Curiosity_static.glb",
        "type": "model/gltf-binary"
      },
      "map": {
        view: {
          extent: "extent to Gale MSL area"
        },
        layer: {
          path: "Gale MSL area",
          type: wms
        }
      }
    },
    
    {
      "order": 5,
      "title": "Curiosity’s traverse",
      "text": "Since august 2012 when it landed on the Red planet at Bradbury, Curiosity travelled about 20 km southwestward. Along the way, the science team behind the rover kept unravelling geological mysteries and deciphering the fluvio-deltaic and lacustrine past of the Gale Crater.",
      "map": {
        "layer": {
          path: geoserver/"Bradbury landing + MSL_traverse_points + HiRISE basemap"
          type: wms/layer-group
        },
        "view": {
          extent: "extent to Gale MSL area"
        }
      }
    },
    
    {
      "order": 6,
      "title": "Kimberley outcrop",
      "text": "Along the road, in 2014, Curiosity stopped at the Kimberley outcrop to do some Geology at this beautiful place. Look, you can even spot the rover on the satellite picture!",
      "map": {
        "layer": {
          "path": http://geoserver.planmap.eu/wms/"HiRISE Kimberley color crop basemap + Arrow",
          "type": LayerGroup/WMS
        }
        "view": {
          "extent": "Zoom to Kimberley outcrop at 1:800",
        }
      }
    },
    
    {
      "order": 7,
      "title": "Kimberley outcrop",
      "text": "Sedimentary rocks of this place belong to the Bradbury Group, an ensemble of sandstones that were deposited about 3.4-3.6 billion years ago, when rivers ran across the crater.",
      "media": {
        "type": "image/jpeg",
        "path": "/stories/mars/gale_crater/media/Kimberley.jpg"
      }
      "map": {
        "view": {
          "extent": "SAME-AS-PREVIOUS",
        }
      }
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
```

### Extra fields:
* `stoptime`: time to stay in the/each episode.

### Questions/Discussions:
* Should `media` items have captions, or is it included in `text` already?
* If no `map` section if declared, should it use the parent/start `extent`/`layer`, or should it use the previous one?
