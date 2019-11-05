# Deploying
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
