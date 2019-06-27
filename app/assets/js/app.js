        map = L.map("map");
        var mars = L.tileLayer("https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png", {
              crs: L.CRS.EPSG3857,
              maxNativeZoom: 9,
              tms: false,
              autoZIndex: true,
              attribution: "<a href='https://github.com/openplanetary/opm/wiki/OPM-Basemaps' target='_blank'>OpenPlanetaryMap</a>",
              center: [-4.630259002640354, 137.40749814285536],
        }).addTo(map);      
      $.getJSON('data/gale.json', function(data) {
         //console.log(JSON.stringify(data));
          //console.log(JSON.stringify(data.chapters.chapter.step_01));



          console.log('Title: '+data.storymap_title);

/*$.each(data.chapters, function(entryIndex, entry) {
   console.log(this.steps);

  $.each(this.steps, function(entryIndex2, entry2) {
   console.log(this.title);
  });

});*/

          basemap = data.basemap;
          url = basemap.url;






          console.log(' - url: '+url);

          chapters = data.chapters;

          $.each( chapters, function( i, item ) {
          console.log(' - Chapter title: '+item.chapter_title);
          //console.log(''+i+' -> '+item.steps.title);

            steps = item.steps;
            //console.log(JSON.stringify(steps));
            $.each( steps, function( i2, item2 ) {
              console.log(' -- Step title: '+item2.title);
              console.log(' -- view extent: '+item2.view.extent);
              console.log(' -- view marker: '+item2.view.marker);
              //console.log(JSON.stringify(loaded_layers));
              //console.log(JSON.stringify(view));


              $.each( this.loaded_layers, function( i3, item3 ) {
              if(item3.path!=''){
               console.log(' --- loaded_layers: ');
               console.log(' ---- path: '+item3.path);
               console.log(' ---- credits: '+item3.credits);                
              }

              });   

              $.each( this.media, function( i4, item4 ) {
              if(item4.path!=''){
               console.log(' --- media: ');                
               console.log(' ---- path: '+item4.path);
               console.log(' ---- caption: '+item4.caption);
              }
              });


            });

          });
 
       
      });