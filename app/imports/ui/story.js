console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './mapcontainer.js';

import './story.css';
import './story.html';

import { stories } from '/imports/api/stories.js';


// When 'story' template is created;
// read 'body','label','chapter' from URI
// -- "http://hostname/body/label#chapter --
// and set the environment:
// - 'currentStory': {"body","label"}
// - 'currentChapter': "chapter-INDEX"
// - 'currentData': story data structure
Template.story.onCreated(function() {
    console.log(`Template 'story' created.`);
    var currentURI = FlowRouter.current();
    var BODY = currentURI.params._body;
    var LABEL = currentURI.params._story;
    var CHAPTER = currentURI.context.hash || 0;
    console.log(`Story params: ${BODY},${LABEL},${CHAPTER}`);
    Session.set('currentStory', {body: BODY, label: LABEL});
    Session.set('currentChapter', CHAPTER);
    _setStory(BODY, LABEL);
})

const _setStory = async (body,label) => {
    await Meteor.call('getStory', {body,label}, (err, res) => {
        if (err) {
            console.log(`Something went wrong for story ${body},${label}`);
        }
        Session.set('currentData', res);
    })
}


// TABLE OF CONTENTS
Template.storytoc.helpers({
    story: function() {
        var story = Session.get('currentData');
        return story;
    },
    chapters: function() {
        var story = Session.get('currentData');
        if (story) {
            console.log(story);
            return story.chapters;
        }
    }
})

Template.storytoc.events({
    'click a.chapter' (event,instance) {
        console.log(`${event.target.id}, ${event.target.href}`);
        var index = event.target.id;
        Session.set('currentChapter', index);
    }
})
