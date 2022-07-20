const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Chia Fruit Shake'/>
              <div>
              Photo by <a href='AUTHOR_LINK'>Brenda Godlinez</a>on <a href='UNSPALSH_LINK'>Unsplash</a>
              </div>
            </div>
              <a href='/places'>
                <button className='btn-primary'>Place Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
