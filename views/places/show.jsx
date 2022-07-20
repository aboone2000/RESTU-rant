const React = require('react')
const Def = require('../default')

function show (data) {
 let comments = (
  <h3 className='inactive'>No comments yet !</h3>
  )
if (data.place.comments.length) {
  comments = data.Place.comments.map(c => {
    return (
      <div className='border'>
        <h2 className='rant'>{c.rant ? 'Rant' : 'Rave!'}</h2>
        <h4>{c.content}</h4>
        <h3>
          <strong>- {c.author}</strong>
        </h3>
        <h4>Rating: {c.stars}</h4>
      </div>
    )
  })
}

    return (
      <Def>
      <main>
        <h1>Add a New Place</h1>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.Place.pic} alt={data.Place.name} />
            <h3>
              Located in {data.Place.city}, {data.Place.country}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            </div>
        </div>
        <h2>Comments</h2>
        {comments}
      </main>
    </Def>
    
    )
}

module.exports = show
