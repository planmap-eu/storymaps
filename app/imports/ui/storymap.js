console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './mapcontainer.js';

import './storymap.html';

import { stories } from '/imports/api/stories.js';

Template.storymap.onRendered(function() {
  // After the whole template (i.e., components and children) is rendered..
  var BODY = 'get from url';
  var STORYNAME = 'get from url';
  Session.set('currentStory', {BODY: BODY, STORYNAME: STORYNAME});
})
