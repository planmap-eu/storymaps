console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';

import './d3container.css';
import './d3container.html';

import { d3 } from '/imports/api/d3.js';

import './utils.js';

/* -------------------------------------------------------------------------
Async function to get the story data; It is a call to the server.
The map (leaflet) can only be built if/when the client gets the data right.
*/
const _buildCanvas = async (body,label,story_data) => {
    await Meteor.call('getStory', {body,label}, (err, res) => {
        if (err) {
            console.log(`Something went wrong for story ${body},${label}`);
        }
        var data = story_data['3dmodel'];
        var canvas = document.getElementById('api-frame');
        var uid = data.uid;
        console.log(`Model UID: ${uid}`);
        var client = new Sketchfab(canvas);
        client.init(uid, {
          success: function onSuccess(api) {
            api.start();
            api.addEventListener('viewerready', function() {
                // API is ready to use
                // Insert your code here
                console.log('Sketchfab viewer is ready');
            });
            d3.setAPI(api);
          },
          error: function onError() {
            console.log('Sketchfab viewer failed to run');
          }
        })
    })
}
/* ------------------------------------------------------------------------- */

Template.d3container.helpers({
  embed_url: function() {
    var chapter_index = Session.get('currentChapter');
    var story = Session.get('currentData');
    var data = story['3dmodel'];
    // "url": "https://sketchfab.com/models/184a99a8f470456cad5a2ab8cdb23a1d",
    // "sketchfab": true,
    // "options": {
    //   "annotations_visible": 1,
    //   "annotation_cycle": 5,
    //   "annotation": 1
    // }
    var url = data.url;
    var options = data.options
    var opts = Object.entries(options).map(([k,v]) => `${k}=${v}`).join('&');
    var embed_url = url + '/embed?' + opts;
    return embed_url;
  }
})

Template.d3container.onCreated(function() {
  this.autorun(() => {
        var chapter_index = Session.get('currentChapter');
        var story_data = Session.get('currentData');
        if (chapter_index >= 0) {
          console.log(`D3Container autorun: (chapter: '${chapter_index}')`);
          if (story_data) {
            var chapter_data = story_data.chapters[chapter_index];
            if (chapter_data) {
              var view = chapter_data.view;
              var marker = chapter_data.marker;
              var layers = chapter_data.layers;
              // map.update({view, marker, layers});
              if (d3) {
                d3.gotoAnnotation(chapter_index);
              }
            }
          }
        }
    })
})


// Template.d3container.onDestroyed(() => {
//     map.clean();
// })
//
Template.d3container.onRendered(() => {
    console.log('<d3container> rendered');
    var currentURI = FlowRouter.current();
    var BODY = currentURI.params._body;
    var LABEL = currentURI.params._story;
    var chapter = currentURI.context.hash || 0;
    var story_data = Session.get('currentData');
    _buildCanvas(BODY,LABEL,story_data);
})
//
// Template.d3container.events({
//   'click #chapters-control .glyphicon'(event) {
//     event.stopPropagation();
//     var btn = event.target.id;
//     console.log(btn);
//     var index = parseInt(Session.get('currentChapter'));
//     console.log(index);
//     if (btn == 'previous') {
//       if (index > 0) {
//         var prev_index = index-1;
//         Session.set('currentChapter', prev_index);
//         window.location.hash = prev_index;
//         console.log(prev_index);
//       }
//     } else {
//       if (isNaN(index)) {
//         Session.set('currentChapter', 0);
//         window.location.hash = '0';
//       } else {
//         var story = Session.get('currentData');
//         var size = story.chapters.length;
//         console.log(`Size ${size}`);
//         if (index < size-1) {
//           var next_index = index+1;
//           Session.set('currentChapter', next_index);
//           window.location.hash = next_index;
//         }
//       }
//     }
//   }
// })
