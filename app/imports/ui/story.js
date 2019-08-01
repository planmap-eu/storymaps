console.log(`Greetings from ${module.id}!`);

// import { Template } from 'meteor/templating';
// import { Session } from 'meteor/session';

//import { stories } from '/imports/api/stories.js';

import '/imports/ui/story.html';


// Template.story.onRendered(function() {
//   console.log('story page rendered');
//   var currentURI = FlowRouter.current();
//   console.log(currentURI);
//   // var BODY = 'mars';
//   // var STORYLABEL = 'the-gale-crater';
//   var BODY = currentURI.params._body;
//   var LABEL = currentURI.params._story;
//   var story = stories.getStory(BODY, LABEL);
//   Session.set('currentStory', {body: BODY, label: LABEL});
//   Session.set('currentData', story);
//   Session.set('currentEpisode', 0);
// })
