import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function AddContact() {
  const contacts = useSelector((state) => state);
  
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    console.log(contacts);

  }



  return (
    <div className='container'>
          <h4 className='text-dark mt-3 text-center'>Add new contact</h4>
      <div className='row my-3 justify-content-center'>
        <div className='col-6'>
          <form className='p-3 shadow'>
            <input type='text' placeholder='Name' className='form-control mt-2' value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type='tel' placeholder='Phone' className='form-control mt-2' value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <input type='email' placeholder='Email address (optional)' className='form-control mt-2' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input onClick={onSubmitHandler} type='submit' value={"Save"} className='btn btn-dark mt-3 w-100' />
          </form>
        </div>        
      </div>      
    </div>
  )
}

export default AddContact