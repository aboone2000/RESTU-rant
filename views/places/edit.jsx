const React = require('react')
const Def = require(' ../default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  <div className='form-group'>
    <label htmlFor="name">Place Name</label>
    <input id="name"
     name="name"
    value={data.place.name}
    required />
  </div>
  <div className='form-group col-sm-6'>
    <label htmlFor="pic">Place Picture</label>
    <input  id="pic" name="pic"value={data.place.pic} />
  </div>
  <div className='form-group col-sm-6'>
    <label htmlFor="city">City</label>
    <input id="city" name="city" />
  </div>
  <div className='form-group col-sm-6'>
    <label htmlFor="country">Country</label>
    <input  id="country" name="country" value={data.place.country} />
  </div>

  <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founding Year</label>
                        <input className="form-control" id="founded" name="founded" value={data.place.founded} />
                    </div>

  <div className='form-group col-sm-6'>
    <label htmlFor="cuisines">Cuisines</label>
    <input  id="cuisines" name="cuisines" required />
  </div>



  <input className='btn btn-primary' type="submit" value="Add Place" />
</form>


          </main>
        </Def>
    )
}

module.exports = edit_form
