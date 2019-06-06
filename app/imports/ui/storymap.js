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
  Session.set('currentStory', {body: BODY, data: story, episode: 0});
})


Template.storytoc.helpers({
  episodes: function() {
    var story = Session.get('currentStory');
    if (story) {
      // return stories.getEpisodes(story);
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
    var episode_index = Session.get('currentEpisodeIndex');
    var story = Session.get('currentStory');
    if (episode_index) {
      // return JSON.stringify(story.data.episodes[episode_index]);
      return story.data.episodes[episode_index];
    }
  }
})
