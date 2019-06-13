# Planmap StoryMap data structure v4

generated in markdown originally, parsed with [md_to_json](https://github.com/njvack/markdown-to-json)

## Change log

- added authors

## Sample data structure

produdced with

```
~ ❯❯❯ md_to_json template_ds_v04.md > template_ds_v04.json
```

* [ v4 markdown template](template_ds_v04.md)
* [ v4 json template](template_ds_v04.md)

## Directory structure v4

```body/planet/chapter/```

steps are inside the chapter, without subdirectory

e.g.

```
├── mars
│   └── gale
│       ├── maps
│       │   ├── ESP_036128_1755_COLOR_3857
│       │   ├── arrow.geojson
│       │   ├── bradbury_contact.geojson
│       │   ├── bradbury_landing.geojson
│       │   ├── gale_msl_area_3857
│       │   ├── grotzinger_orbital_facies_map.geojson
│       │   ├── msl_traverse_line.geojson
│       │   ├── msl_traverse_points.geojson
│       │   └── murray-lab_ctx-mosaic_gale_3857 
│       └── media
│           ├── chapter_02
│           ├── chapter_03
│           ├── chapter_04
│           ├── chapter_05
│           ├── chapter_07
│           └── chapter_08
├── mercury
│   ├── hokusai
│       ├── maps
│       │   ├── storymap_route_H05.geojson
│       │   ├── storymap_stops_H05.geojson
│       │   └── tmp_no_public
│       └── media
│           ├── chapter_00
│           ├── chapter_01
│           ├── chapter_02
│           ├── chapter_03
│           ├── chapter_04
│           ├── chapter_05
│           ├── chapter_06
│           └── chapter_07
└── moon
    └── spaapollo
        ├── maps
        │   └── apollo_stops.geojson
        └── media
```
