console.log(`Greetings from ${module.id}!`);

import { Template } from 'meteor/templating';

import './mapcontainer.html';

//import { stories } from '/imports/api/stories.js';
import { map } from '/imports/api/map.js';


Template.mapcontainer.onDestroyed(() => {
    map.clean();
})

Template.mapcontainer.onRendered(() => {
    console.log('<mapcontainer> rendered');
    /*
    var story = Session.get('currentData');
    console.log(`mapcontainer, storyid: ${story}`);
    if (story) {
        map.build(story.basemap, 'mapcontainer');
    }
})
*/

    var currentURI = FlowRouter.current();
    var BODY = currentURI.params._body;
    var LABEL = currentURI.params._story;
    var chapter = currentURI.context.hash || 0;

    _buildMap(BODY,LABEL);
})

const _buildMap = async (body,label) => {
    await Meteor.call('getStory', {body,label}, (err, res) => {
        if (err) {
            console.log(`Something went wrong for story ${body},${label}`);
        }
        map.build(res.basemap, 'mapcontainer');
    })
}


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



/*
Template.map_media.helpers({

    storyid: function() {
        var story = Session.get('currentData');
        console.log(`map-media, storyid: ${story}`);
        if (story) {
            console.log(story);
            map.build(story.basemap, 'mapcontainer');
            return story.title;
        }
    },

    chapterid: function() {
        var story = Session.get('currentData');
        var chapter_index = Session.get('currentChapter');
        console.log(`map-media, chapterid: ${story},${chapter_index}`);
        if (story) {
            console.log(story);
            console.log(chapter_index);
            var chapter_data = story.chapters[chapter_index];
            console.log(chapter_data);
            if (chapter_data) {
                map.update(chapter_data.map);
            }
            return chapter_index;
        }
    }
})
*/
