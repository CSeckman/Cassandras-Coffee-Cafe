import { Drink } from '../models/drink.js'
import { Profile } from '../models/profile.js'

//index all fav drinks on profile view
function show (req, res){
  Profile.findById(req.params.id)
  .populate('myFavs')
  .then(profile => {
    console.log(profile)
    res.render('profiles/show', {
      title: "Profile Page",
      user: req.user, 
      profile
    })
  })
}

export {
  show
}