import React from 'react'

function AddContact() {
  return (
    <div className='container'>
          <h4 className='text-dark mt-3 text-center'>Add new contact</h4>
      <div className='row my-3 justify-content-center'>
        <div className='col-6'>
          <form className='p-3 shadow'>
            <input type='text' placeholder='First name' className='form-control mt-2' />
            <input type='text' placeholder='Last name' className='form-control mt-2' />
            <input type='tel' placeholder='Phone' className='form-control mt-2' />
            <input type='email' placeholder='Email address (optional)' className='form-control mt-2' />
            <input type='submit' value={"Save"} className='btn btn-dark mt-3 w-100' />
          </form>
        </div>        
      </div>      
    </div>
  )
}

export default AddContact