Meteor.methods({
    'getStory' ({body, label}) {
        var path = body + '/' + label + '.json';
        console.log(path);
        return JSON.parse(Assets.getText(path))
    }
})
