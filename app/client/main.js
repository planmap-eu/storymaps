const getIMG = async (path) => {
  return await new Promise((resolve, reject) => {
    Meteor.call('img.get', { path }, (err, res) => {
      if (err) reject('Something went wrong')
      resolve(res)
    })
  })
}

// const logo_planmap = getIMG('img/logo-planmap.jpg');
// console.log(logo_planmap);
