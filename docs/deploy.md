# Deploying

To start, install [meteor](https://guide.meteor.com/#quickstart) and clone this repository.
By default, this repo will be cloned in a directory `storymaps/` in your local filesystem.
Inside `storymaps` there is an `app/` directory, which is where the app source code, Meteor/JS and relevant data files tree lives.
Under `app/` is where the commands to run the Storymaps app are run.

During development, the app is simply run by
```bash
% cd storymaps/app
% meteor run
```
(from inside `app/`), if you want to specific port (different from `3000`, default), use `--port 6000` (for example).

When you `meteor run`, Meteor will install the proper runtime version (`1.8.1` here) and all the other (npm) packages.

Meteor may complain and run into errors regarding package/versions at this point, don't worry, just do what it suggests.
For instance, it always complains on [babel](https://babeljs.io/) package (don't know exactly why), but doing as Meteor suggests,
```bash
% meteor npm install --save @babel/runtime
```

> There are a couple of Docker images providing Meteor (+NodeJS): https://guide.meteor.com/deployment.html#docker .
> They did not worked (smoothly) on my side, but may be a good setup to not polute your system with Node+Meteor+NPM etc.


- - -
#### Refs
* https://guide.meteor.com/deployment.html#deploying
- - -

## Build

- - -
#### Refs
* https://docs.meteor.com/commandline.html#meteorbuild
- - -

Meteor is used to frame and deploy the App; Meteor runs over NodeJS.

To build the (nodejs) bundle, run
```bash
$ meteor build [--directory] ../build
```
from inside `storymaps/app/`.
This will package the app -- either in a directory or tarball -- bundle ready
to be run on NodeJS.
