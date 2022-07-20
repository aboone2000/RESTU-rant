const db = require('../controllers/models')


db.Place.create([{
    name: 'Ise Sueyoshi',
    city: 'Tokyo',
    Country: 'Japan',
    cuisines: 'Japanese',
    pic: 'https://beaumondetraveler.com/wp-content/uploads/2021/03/feature.jpg'
  }, {
    name: 'La Tour dArgent',
    city: 'Paris',
    Country: 'France',
    cuisines: 'French',
    pic: 'https://fastly.4sqi.net/img/general/width960/MHNgFs-4ZZ_P91BtZFkFZajK3jFiTkCZwSak9kvnMu4.jpg'
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})