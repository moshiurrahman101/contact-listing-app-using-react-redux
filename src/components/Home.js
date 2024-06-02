import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
      <div className='row my-3'>
        <div className='col-8'>
          <h4 className='text-dark mt-3'>Welcome to Panda Contacts 📞</h4>
        </div>
        <div className='col-4 text-right'>
          <Link to="/add" className='btn btn-outline btn-dark'>Create New Contact</Link>
        </div>
        <hr />
        
      </div>      
    </div>
  )
}

export default Home