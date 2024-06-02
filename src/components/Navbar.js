import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand lg navbar-primary bg-primary py-2'>
        <div className='container'>
            <Link to="/" className='navbar-brand ml-5 text-white'>Contact Book</Link>
            <Menu/>
        </div>
    </nav>
    
  )
}

export default Navbar