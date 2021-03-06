import './story_toc.html';


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
    },
    currentChapter: function(index) {
      var cc = Session.get('currentChapter');
      // console.log(`C-Chapter: ${index}, ${cc}`);
      return parseInt(cc) == parseInt(index);
    }
})


Template.storytoc.events({
    'click a.chapter' (event,instance) {
        console.log(`${event.target.id}, ${event.target.href}`);
        var index = event.target.id;
        Session.set('currentChapter', index);
    }
})
