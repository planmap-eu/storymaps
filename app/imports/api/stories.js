import { stories_collection } from './data/stories.js';

class Stories {
  constructor() {
    this._all = stories_collection;
  }

  _dump() {
    console.log(JSON.stringify(this._all));
  }

  getStory(currentBody, storyLabel) {
    this._all.forEach((body_and_stories) => {
      var body = body_and_stories.body;
      if (body == currentBody) {
        var stories = body_and_stories.stories;
        stories.forEach((story) => {
          if (story.label == storyLabel) {
            return story;
          }
        })
      }
    })
    return null;
  }

  getLinks() {
    var stories_listing = [];
    this._all.forEach((body_stories) => {
      var body = body_stories.body.toLowerCase();
      var stories_meta = []
      body_stories.stories.forEach((story_data) => {
        var thumbnail = story_data.thumbnail;
        var title = story_data.title;
        var url = [body, story_data.label].join('/');
        stories_meta.push({
          url: url,
          title: title,
          thumbnail: thumbnail
        })
      })
      stories_listing.push(body: stories_meta);
    })
    return stories_listing;
  }
}

var stories = new Stories();
export { stories };