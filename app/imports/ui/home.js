console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';

import './home.html';

import { stories } from '/imports/api/stories.js';

Template.home.helpers({
  stories: function() {
    return stories.getLinks();
  }
})
