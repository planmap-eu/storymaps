console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './mapcontainer.js';

import './story.html';

import { stories } from '/imports/api/stories.js';


// When 'story' template is rendered;
// read 'body','label','chapter' from URI
// -- "http://hostname/body/label#chapter --
// and set the environment:
// - 'currentStory': {"body","label"}
// - 'currentChapter': "chapter"
// - 'currentData': story data structure
Template.story.onCreated(function() {
    console.log('Story page rendered');

    var currentURI = FlowRouter.current();
    var BODY = currentURI.params._body;
    var LABEL = currentURI.params._story;
    var chapter = currentURI.context.hash || 0;
    console.log(`Story: ${BODY},${LABEL},${chapter}`);

    Session.set('currentStory', {body: BODY, label: LABEL});
    Session.set('currentChapter', chapter);

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



Template.storypanel.helpers({
    chapter: function() {
        var chapter_index = Session.get('currentChapter');
        var story = Session.get('currentData');
        if (chapter_index >= 0) {
            if (story) {
                var chapter = story.chapters[chapter_index];
                console.log(chapter);
                return chapter;
            }
        }
    }
})



Template.mediacanvas.helpers({
    setCanvas(type, url, width) {
        var hws = ["src='/"+url+"'"];
        //var hws = ["width="+width,"height="+height,"src='"+url+"'"].join(' ');
        var element;
        if (type == 'image/png' || type == 'image/jpeg' || type == 'image/jpg') {
            element = "<img style='width:100%' "+hws+">";
            console.log(element);
            return element;
        } else {
            if (type == 'video/youtube') {
                // return "<iframe src='"+url+"'></iframe>";
                return '<iframe '+hws+' frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>';
            } else {
                if (type == 'model/gltf-binary') {
                    console.log("Not working with 3D models yet.")
                    return type;
                }
            }
        }
        console.log("I have no idea how to handle " + type);
        return type;
    }
})
