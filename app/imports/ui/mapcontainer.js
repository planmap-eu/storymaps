console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';

import './mapcontainer.html';

import { stories } from '/imports/api/stories.js';
import { map } from '/imports/api/map.js';


Template.mapcontainer.onDestroyed(function() {
  map.clean();
})

Template.mapcontainer.helpers({
  // 'currentStory' is being set by parent's template 'onRendered',
  // so we are safe to embed "the map" into "mapcontainer"
  storyid: function() {
    console.log('mapcontainer helper storyid');
    // var story = Session.get('currentStory');
    var story = Session.get('currentData');
    console.log(story);
    if (story) {
      // var story_data = stories.getStory(story_about.body, story_about.label);
      map.build(data.map, 'mapcontainer');
    }
  },

  episodeid: function() {
    // var story = Session.get('currentStory');
    var story = Session.get('currentData');
    console.log(story);
    var episode_index = Session.get('currentEpisodeIndex');
    console.log(episode_index);
    if (story) {
      var episode_data = story.episodes[episode_index];
      console.log(episode_data);
      if (episode_data) {
        map.update(episode_data.map);
      }
    }
  }
})
