
# Structure of the Story-maps app

The app is written over [Meteor](https://www.meteor.com), a manager
that handles the whole development/deployment process.
Meter runs on top of NodeJS.
Some packages are available through `npm` (node) only while others can
be found in Meteor's Atmosphere, the packages management though (even if `npm`)
is interfaced by `meteor` always: `meteor npm --save (...)`.

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


## Source files and Templates

The relation of source files and the app mechanism is described below;
sections 'API/data' and 'UI' present what happens in the background -- handling
data requests -- and what is displayed through the browser, respectively.
The 'Init' section briefly wlaks through the files relevant to initialize the
app, those few files are rarely touched but are of great importance.


### Init

```
client/
├── lib
│   └── router.js
├── main.css
├── main.html
└── main.js
```
#### `main`s, `head` and `body`

The (client-side) app starts at `client/main.{html,js}`.
The HTML provides the `</head>` tag of the app.
The JS file does the importing of of the next relevant file.

> Things to check about the load of `body.js` and *not* loading of `main.html`:
> * After the implementation of the router (FlowRouter), "`import body.js`" is
> *probably not* necessary anymore.
> * Contrary to the other `*.js` files from `/imports/ui/*`, `main.js` does *not*
> "`import main.html`"; it is not necessary because they (`main.*`) are mandatory
> in Meteor assembly process, but it worth noting the difference to avoid confusion.

#### `router`

The router settings (rules only, actually) are placed inside `client/lib/router.js`.
That's it; There is no explicit imports to do, the templates to render we specify
there (with `BlazeLayout`) are resolved by Meteor from the app's global-template
space.


### UI

```
ui
├── body.html
├── body.js
├── home.html
├── home.js
├── mapcontainer.html
├── mapcontainer.js
├── mediaoverlay.html
├── mediaoverlay.js
├── storymap.html
└── storymap.js
```

#### `body` and the `app`

Inside `/imports/ui` we find all files building the HTML interface.
Remember we loaded `import /imports/ui/body.js` from `/client/main.js` -- even
if it not necessary because the _router_ is handling it anyway --, well
`body.js` is effectively the entrance step in our app's structure.

In `body.html` we define the templates `app`, `menubar`, `statubar`.
The `menubar` and `statusbar` are meant to be the top- and bottom-bar in the
app interface, they are effectively positioned in the `</html></body>` of the
page by the `app` template:

```
<template name="app">
  {{> menubar}}
  {{> Template.dynamic template=main}}
  {{> statusbar}}
</template>
```

`app` is effectively called by `BlazeLayout` (from `router.js`) with the value
for `main` in the `Template.dinamic` argument.
`main` will either value `home` or `storymap` according to the route in place.
`BlazeLayout` will care about taking whatever was rendered under `app` template
and put it inside `</body>` so that the browser can eventually present the
content to the user.

#### `home`

The home (entry) page presents the user the list of stories available.
Each story is a button (something clickable to a `href`) linking to the story-map
endpoint ("/body/story").
The list of stories, organized under the corresponding body is given to the
template (`home.html`) by the corresponding helper method in `home.js`.

The object containing the stories is structured as:
```javascript
[
  {
    body: "mars", // or mercury, or moon, or whateve
    stories: [
      {
        title: "a title",
        url: "a url to server/body/story-label"
      },
      {
        ...
      }
    ]
  },
  { body: ...,
    stories: ...}
]
```

#### `storymap`
