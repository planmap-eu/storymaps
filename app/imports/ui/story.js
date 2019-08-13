console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './mapcontainer.js';

import './story.html';

import { stories } from '/imports/api/stories.js';


Template.story.onRendered(function() {
    console.log('Story page rendered');

    var currentURI = FlowRouter.current();
    var BODY = currentURI.params._body;
    var LABEL = currentURI.params._story;
    var EPISODE = currentURI.context.hash || 0;
    console.log(`Story: ${BODY},${LABEL},${EPISODE}`);

    var story = stories.getStory(BODY, LABEL);
//    var story = getStory(BODY, LABEL);
    console.log(story);
    if (story) {
        Session.set('currentStory', {body: BODY, label: LABEL});
        Session.set('currentData', story);
        Session.set('currentEpisode', EPISODE);
    }
    else {
        console.log('XXX: story not available');
    }
})


Template.storytoc.helpers({
  episodes: function() {
    var story = Session.get('currentData');
    if (story) {
      return story.episodes;
    }
  }
})

Template.storytoc.events({
    'click a.episode' (event,instance) {
        console.log(`${event.target.id}, ${event.target.href}`);
        var index = event.target.id;
        Session.set('currentEpisode', index);
    }
})


Template.storypanel.helpers({
  episode: function() {
    console.log('storypanel helpers episode');
    var episode_index = Session.get('currentEpisodeIndex');
    // var story = Session.get('currentStory');
    var story = Session.get('currentData');
    if (episode_index >= 0) {
      return story.episodes[episode_index];
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
