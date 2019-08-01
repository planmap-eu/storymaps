/*
(From https://github.com/kadirahq/blaze-layout)

Set Different Root Node

By default, BlazeLayout render layouts into a DOM element with the id __blaze-root.
Sometimes, you may need to change it or just render layouts into the body.
If so, (...) Add following code inside on the top of one of your client side JS file:
```
BlazeLayout.setRoot('body');
```
You can set any CSS selector, DOM Node, or jQuery object as the root.
*/
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
      BlazeLayout.render('app', {main: 'stories'});
    }
});
