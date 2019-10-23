console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';

import './mapcontainer.css';
import './mapcontainer.html';

import { map } from '/imports/api/map.js';

import './utils.js';

/* -------------------------------------------------------------------------
Async function to get the story data; It is a call to the server.
The map (leaflet) can only be built if/when the client gets the data right.
*/
const _buildMap = async (body,label) => {
    await Meteor.call('getStory', {body,label}, (err, res) => {
        if (err) {
            console.log(`Something went wrong for story ${body},${label}`);
        }
        map.build(res.basemap, 'mapcontainer');
    })
}
/* ------------------------------------------------------------------------- */

Template.mapcontainer.onCreated(function() {
  this.autorun(() => {
        var chapter_index = Session.get('currentChapter');
        var story_data = Session.get('currentData');
        if (chapter_index >= 0) {
            if (story_data) {
                var chapter_data = story_data.chapters[chapter_index];
                var view = chapter_data.view;
                var marker = chapter_data.marker;
                var layers = chapter_data.layers;
                map.update({view, marker, layers});
            }
        }
    })
})


Template.mapcontainer.onDestroyed(() => {
    map.clean();
})

Template.mapcontainer.onRendered(() => {
    console.log('<mapcontainer> rendered');
    var currentURI = FlowRouter.current();
    var BODY = currentURI.params._body;
    var LABEL = currentURI.params._story;
    var chapter = currentURI.context.hash || 0;
    _buildMap(BODY,LABEL);
})

Template.mapcontainer.events({
  'click #chapters-control .glyphicon'(event) {
    event.stopPropagation();
    var btn = event.target.id;
    console.log(btn);
    var index = parseInt(Session.get('currentChapter'));
    console.log(index);
    if (btn == 'previous') {
      if (index > 0) {
        var prev_index = index-1;
        Session.set('currentChapter', prev_index);
        console.log(prev_index);
      }
    } else {
      var story = Session.get('currentData');
      var size = story.chapters.length;
      console.log(`Size ${size}`);
      if (index < size-1) {
        var next_index = index+1;
        Session.set('currentChapter', next_index);
      }
    }
  }
})


Template.storymap.helpers({
    chapter: function() {
        var chapter_index = Session.get('currentChapter');
        var story_data = Session.get('currentData');
        console.log(`Chapter index: ${chapter_index}`);
        if (chapter_index >= 0) {
            // console.log(`Story data: ${JSON.stringify(story_data)}`);
            if (story_data) {
                var chapter_data = story_data.chapters[chapter_index];
                console.log(`Chapter data: ${JSON.stringify(chapter_data)}`);
                return chapter_data;
            }
        } else {
          return null;
        }
    }
})


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
                return '<iframe '+hws+' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>';
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
