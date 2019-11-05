import './editor.js';
import './mapcontainer.js';
import './story_panel.js';

import './story_content.html';


Template.storymap.helpers({
    chapter: function() {
        var chapter_index = Session.get('currentChapter');
        var story_data = Session.get('currentData');
        console.log(`Chapter index: ${chapter_index}`);
        if (chapter_index >= 0) {
            // console.log(`Story data: ${JSON.stringify(story_data)}`);
            if (story_data) {
                var chapter_data = story_data.chapters[chapter_index];
                console.log(`Chapter data: ${JSON.stringify(chapter_data)}`);
                return chapter_data;
            }
        } else {
          return null;
        }
    }
})
