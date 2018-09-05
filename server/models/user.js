//We require mongoose
var mongoose = require('mongoose');

var User = mongoose.model('User', {
  mail: {
    type: String,
    required: true,
    minlength:1,
    trim: true, //elimina gli spazi a inizio e fine stringa
  },
});

// new Variable
// var newUser = new User ({
//   mail: ' daniela.muratore@gmail.com'
// })
//
// save the new Variable
// newUser.save().then((doc) => {
//     console.log('Saved todo', doc);
//   }, (e) => {
//     console.log('Unable to save todo');
//   })

//We export the model that we have created
module.export = {User};
