console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';

import './storymap.js';

import './body.html';

Template.body.helpers({
  isHome: false,
})
