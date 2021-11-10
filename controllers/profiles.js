import { Drink } from '../models/drink.js'
import { Profile } from '../models/profile.js'
import { Memory } from '../models/memory.js'

//index all fav drinks on profile view
function show (req, res){
  Profile.findById(req.params.id)
  .populate('myFavs')
  .then(profile => {
    // console.log(profile)
    res.render('profiles/show', {
      title: "Profile Page",
      user: req.user, 
      profile
    })
  })
}

function deleteFav(req, res) {
  console.log("deleteFav has been hit")
  // console.log(req.user)
  Profile.findById(req.user.profile._id)
  .then(profile => {
    const favorites = profile.myFavs
    favorites.remove({_id: req.params.id})
    //   console.log(favorites)
  //   console.log(req.body)
  //   favorites.remove({_id: req.params.id})
    profile.save(function(err) {
    res.redirect(`/profiles/${profile._id}`)
    })
  })
}

export {
  show, 
  deleteFav
}