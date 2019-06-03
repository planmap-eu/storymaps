Example with the Mars' Gare Crater story-map (https://wiki.planmap.eu/display/planmap/Gale+Crater+mapping+Story+Map).

Main JSON file:
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
    }
  ]
}
```

#### Notes

##### Step 0
The first chapter of the story has no media associated, neither a position/location to focus on,
It seems the author is thinking about an introductory full page at this moment.

##### Step 4
There is no media associated, but apparently Gwenael wants to highlight a particular vector layer/map on top of the background map. On one hand, we could/should associate a media anyways, which would be the figure of the particular map ("Grotzinger_2014_orbital facies” and “Gale MSL area” layers). On the other hand, a section in the JSON/chapter block needs to be responsible for triggering features in the map: a GeoJSON structure could handle it; the only "problem" is that GeoJSONs store features themselves, not links to maps.
