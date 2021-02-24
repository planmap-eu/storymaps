import './editor.js';
import './d3container.js';
import './mapcontainer.js';
import './story_panel.js';

import './story_content.html';


Template.storymap.helpers({
    story3D: function() {
      var is3D = Session.get('is3D');
      return is3D;
    },

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
