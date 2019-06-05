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
    var story_about = Session.get('currentStory');
    var story_data = stories.getStory(story_about.body, story_about.label);
    if (story_data) {
      Map.build(story_data, 'mapcontainer');
    }
    return story_about.body + story_about.label;
  }
})
