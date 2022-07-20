module.exports = [{
    name: 'Ise Sueyoshi',
    city: 'Tokyo',
    country: 'Japan',
    cuisines: 'Japanese',
    pic: 'https://beaumondetraveler.com/wp-content/uploads/2021/03/feature.jpg'
  }, {
      name: 'La Tour dArgent',
      city: 'Paris',
      country: 'France',
      cuisines: 'French',
      pic: 'https://www.doitinparis.com/files/2021/bars-et-restos/restos-etoiles/08/la-tour-d-argent/la-tour-dargent.jpg'
  }]

  const mongoose = require('mongoose')

 
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded:{
 type: Number,
min: [1673,'Surely not that old?!'], 
max: [new Date().getFullYear, 'This is the future!']
},
comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comment'}]   
})

placeSchema.methods.showEstablished = function() {}



module.exports = mongoose.model('Place', placeSchema)
