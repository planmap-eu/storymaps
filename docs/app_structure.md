
# Structure of the Story-maps app

The app is written over [Meteor](https://www.meteor.com), a manager
that handles the whole development/deployment process.

The app components are written using [BlazeJS](http://blazejs.org/), it is
a framework based on [templates](http://blazejs.org/guide/spacebars.html) and
enforces HTML/Javascript splitting.
HTML (code) is as an interface declaration, while the corresponding Javascript
defines the actions and feed the HTML templates properly.

##### HTML/Javascript
_Every_ `HTML` source code file has an associated `Javascript`
source code file name equally: `body.html`, `body.js`.
HTML files will are in the app's `client/` and `import/ui/` directory only.

##### Routes
Routings are handled by [FlowRouter](https://atmospherejs.com/kadira/flow-router)
[1](https://guide.meteor.com/routing.html).
There are two route rules defined:
* Connections to `/` should go to the `home` page;
* Connections to "`/body/story`", to the corresponding storymap.

Routes are defined in `client/lib/router.js`.

Together with FlowRouter, [BlazeLayout](https://atmospherejs.com/kadira/blaze-layout)
is used to effectively rendenring the page: it calls for a template with the
appropriate parameters (taken from the route itself).

The general idea is that the Home (or _entry_) page provides the user with
a list of links to the stories.
The links are built from "body" (Mars, Mercury, Moon) and "story label" (defined
in the story config file), which will be used by the router (`/body/story-label`)
to call the right storymap.

It is effectively kind of strange the way Meteor/FlowRouter/BlazeLayout handle
this routing/rendering process.
And by _strange_ I mean it is not explicit, clear the connections from the
source code it self (but I tried to be as declarative as possible).

In the `router.js` file I declare to BlazeLayout I want the templates (soon to
be rendered) to be rendered under the `</body>` element.
In `body.html`, we notice the `</body>` element is effectively empty, and that's
ok.
Either the `app` template or the `home` template will populate `</body>` accordingly,
with the help from BlazeLayout, under FlowRouter.
