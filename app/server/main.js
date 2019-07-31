Meteor.methods({
  'img.get'(data) {
    return Assets.getText(data.path)
  }
})
