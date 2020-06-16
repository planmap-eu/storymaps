import './story_panel.html';

Template.storypanel.helpers({
    many_items_in: function(array) {
      return array.length > 1;
    }
})

Template.mediacanvas.helpers({
    setCanvas(type, url) {
        var hws = ["src='"+url+"'"];
        var element;
        if (type == 'image/png' || type == 'image/jpeg' || type == 'image/jpg') {
            element = "<img style='max-height:200px; max-width:100%' "+hws+">";
        } else {
            if (type == 'video/youtube') {
                element = '<div class="video-container"><iframe '+hws+' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="videoiframe"></iframe></div>';
            } else {
                if (type == '3d/sketchfab') {
                  element = '<div class="video-container"><iframe '+hws+' title="A 3D model" width="400" height="300" frameborder="0" allow="fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>';
                }
                // if (type == 'model/gltf-binary') {
                //     console.log("Not working with 3D models yet.")
                //     return type;
                // }
            }
        }
        if (!element) {
          console.log("I have no idea how to handle " + type);
          return null;
        }
        return element;
    }
})

Template.mediacanvas.events({
    'click a.toOverlay' (event,instance) {
        event.preventDefault();
        var overlay_content = document.getElementById("overlay-content");
        // overlay_content.innerHTML = event.currentTarget.innerHTML;
        var media_div = document.getElementById(event.currentTarget.dataset.id_);
        overlay_content.innerHTML = media_div.innerHTML;
        var overlay = document.getElementById("overlay");
        overlay.style.display = "table-cell";
    }
})
