BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    action: function(params, queryParams) {
      console.log("Routing to Home");
      BlazeLayout.render('app', {main: 'home'});
    }
});

FlowRouter.route('/:_body/:_story', {
    action: function(params, queryParams) {
      console.log("Routing to story:", params._body, params._story);
      BlazeLayout.render('app', {main: 'storymap'});
    }
});
