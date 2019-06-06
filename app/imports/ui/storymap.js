console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './mapcontainer.js';
import './mediaoverlay.js';

import './storymap.html';

import { stories } from '/imports/api/stories.js';


Template.storymap.onRendered(function() {
  console.log('storymap rendered');
  var BODY = 'mars';
  var STORYLABEL = 'the-story-label';
  var story = stories.getStory(BODY, STORYLABEL);
  Session.set('currentStory', {body: BODY, data: story});
  Session.set('currentEpisodeIndex', 0);
})


Template.storytoc.helpers({
  episodes: function() {
    var story = Session.get('currentStory');
    if (story) {
      return story.data.episodes;
    }
  }
})

Template.storytoc.events({
  'click button' (event,instance) {
    var index = event.target.id;
    Session.set('currentEpisodeIndex', index);
  }
})


Template.storypanel.helpers({
  episode: function() {
    console.log('storypanel helpers episode');
    var episode_index = Session.get('currentEpisodeIndex');
    var story = Session.get('currentStory');
    if (episode_index >= 0) {
      return story.data.episodes[episode_index];
    }
  }
})


Template.mediacanvas.helpers({
  setCanvas(type, url, width, height) {
    var hws = [ "width="+width,
                "height="+height,
                "src='"+url+"'"].join(' ');
    if (type == 'image/png') {
      return "<img "+hws+"'>";
    } else {
      if (type == 'video/youtube') {
        // return "<iframe src='"+url+"'></iframe>";
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
