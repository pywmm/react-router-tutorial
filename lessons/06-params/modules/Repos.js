import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div>
        <div>Repos</div>

        <ul>
          <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>

      </div>
      )
  }
})

