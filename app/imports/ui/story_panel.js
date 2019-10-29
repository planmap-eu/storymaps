import './story_panel.html';

Template.storypanel.helpers({
    many_items_in: function(array) {
      return array.length > 1;
    }
})


Template.mediacanvas.helpers({
    setCanvas(type, url, width) {
        var hws = ["src='"+url+"'"];
        var element;
        if (type == 'image/png' || type == 'image/jpeg' || type == 'image/jpg') {
            element = "<img style='width:100%' "+hws+">";
            return element;
        } else {
            if (type == 'video/youtube') {
                // return '<div style="width:100px"><iframe '+hws+' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe></div>';
                return '<div class="video-container"><iframe '+hws+' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="videoiframe"></iframe></div>';
            } else {

                if (type == 'model/gltf-binary') {
                    console.log("Not working with 3D models yet.")
                    return type;
                }
            }
        }
        console.log("I have no idea how to handle " + type);
        return type;
    }
})
