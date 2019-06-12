## Preparation of data (internal/external) for Planmap StoryMap App

Planmap app data are either locally served or fetched from remote server (tms, wms, etc.). The Planmap StoryMap App uses Leaflet and [OpepnPlanetaryMap](https://openplanetary.github.io/opm) basemaps as background, plus, as needed, local, regional or global tiles/map services.

## Remote data

### Tile Servers
- Tile servers, e.g OpenPlanetaryMap@Carto - see https://github.com/openplanetary/opm/wiki

### OGC WMS

WMS servers, e.g. Planmap wms - 

## Local data

### Raster data
- served as tiles (xyz png), whatever the starting projection is, they need first to changed to web mercator (EPSG:3857) and then converted to tiles (possibly the latter does also the proj conversion)

reprojection:

```
gdalwarp -t_srs EPSG:4326 <raster.tif> <raster_webmercator.tif>
```
tile creation:

```
gdal2tiles.py -v -p mercator -s EPSG:3857 -w leaflet <raster_webmercator.tif> <output_tile_directory?
```



### Vector data
- served as geojson