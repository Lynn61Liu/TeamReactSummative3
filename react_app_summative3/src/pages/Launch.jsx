import React from 'react'
import { Link } from 'react-router-dom'

function Launch() {
  return (
      <>
      <h3> This is Launch screen</h3>
     
      <nav>
      <Link to="/login"><button>welcome</button></Link>
     </nav>
      </>
    
          
  )
}

export default Launch