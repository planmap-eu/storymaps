
console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.registerHelper('storySize', function() {
    var story = Session.get('currentData');
    if (story) {
        return story.chapters.length;
    }
})
