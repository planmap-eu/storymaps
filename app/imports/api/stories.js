//import { stories_collection } from '../data/stories.js';

var stories_collection;

class Stories {
    constructor() {
        this._all = stories_collection;
    }

    _dump() {
        console.log(JSON.stringify(this._all));
    }

    getStory(currentBody, storyLabel) {
        return _getStory(currentBody, storyLabel);
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
            stories_listing.push({body: body, stories: stories_meta});
        })
        return stories_listing;
    }

    getEpisodes({body, label}) {
        var story = this.getStory(body, label);
        return story.episodes;
    }

    getEpisode({body, label, index}) {
        var story = this.getStory(body, label);
        return story.episodes;
    }
}


// Fetch story from server (see server/main.js)
//const _getStory = async (body,label) => {
//    return await new Promise((resolve, reject) => {
//        Meteor.call('getStory', {body,label}, (err, res) => {
//            if (err) {
//                reject(`Something went wrong for story ${body},${label}`);
//            }
//            resolve(res)
//            Session.set('currentData', res);
//        })
//    })
//}


var stories = new Stories();
export { stories };
