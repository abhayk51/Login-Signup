import {useState} from 'react';
import React from 'react';

function LoginForm(){
  const [action, setaction] = useState('Login');
  return (
    <>
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-3 bg-light rounded px-5 py-4">
        <h1 className='text-center text-primary fw-bold'>{action}</h1><hr className='border border-2 border-primary'/>
        <form action="">
          {action==='Login'?null:<>
            <div className="mb-3">
              <label for="fname" className="form-label">First Name</label>
              <input type="text" className="form-control" id="fname" placeholder="First Name"/>
            </div>
            <div className="mb-3">
              <label for="lname" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="First Name"/>
            </div>
          </>}
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="mail@example.com"/>
          </div>
          <div className="mb-3">
            <label for="pass" className="form-label">Password</label>
            <input type="password" className="form-control" id="pass" placeholder="Password"/>
          </div>
          {action==='Login'?<p className='mb-3'>forgot password?</p>:null}
          <div className="row d-flex justify-content-center mb-3">
            <button type='submit' className='btn btn-primary btn-block fw-bold'>{action}</button>
          </div>
          <p className='text-center'>{action==='Login'?'Not':'Already'} have an account? <a href='#' onClick={()=>{setaction(action === 'Login'?'Signup':'Login')}}>{action==='Login'?'Signup':'Login'}</a></p>
        </form>

      </div>
    </div>
    </>
  )
}

export default LoginForm;
