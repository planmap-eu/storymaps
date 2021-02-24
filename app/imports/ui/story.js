console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './story_toc.js';
import './story_content.js';

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
    var CHAPTER = currentURI.context.hash;// || 0;
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
        var is3D = res['3dmodel'] ? true : false;
        Session.set('currentData', res);
        Session.set('is3D', is3D);
        console.log(`Story loaded succesfully (3dStory:${is3D}).`);
    })
}

Template.story.helpers({
    'body': function() {
        return Session.get('currentStory').body;
    }
})
