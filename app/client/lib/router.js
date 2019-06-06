BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    action: function(params, queryParams) {
      console.log("Yeah! Home");
      BlazeLayout.render('app', {main: 'home'});
    }
});

FlowRouter.route('/:_body/:_story', {
    action: function(params, queryParams) {
      console.log("Yeah! Story", params._body, params._story);
      BlazeLayout.render('app', {main: 'storymap'});
    }
});
