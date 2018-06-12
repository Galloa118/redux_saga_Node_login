import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const AppFirst = props => (
  <div className="App">
    <div className="App-header">
      
    </div>
    <section className="App-body">
      {props.children}
    </section>
  </div>
)

AppFirst.propTypes = {
  //children: PropTypes.node,
}

export default AppFirst
