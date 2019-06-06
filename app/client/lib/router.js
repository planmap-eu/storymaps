FlowRouter.route('/', {
    action: function(params, queryParams) {
        console.log("Yeah! Home");
    }
});

FlowRouter.route('/:_body/:_story', {
    action: function(params, queryParams) {
        console.log("Yeah! Home", params._body, params._story);
    }
});
