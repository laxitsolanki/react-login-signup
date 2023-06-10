import React from 'react'
import { Link } from 'react-router-dom';
import Signup from '../signup/Signup';

const Login =() =>{
  return (
    <div>
      <div class="container p-5">
        <div className="row">
          <div className="col-md-6">
          <img src={require('../../Assets/images/signup/Data_security_05.jpg')} width={500}/>
          </div>
          <div className="col-md-6 bg-light">
          <form>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <p className="mt-4"> <Link to='/Signup'>signup</Link> </p>

        </form>
          </div>
        </div>

        
      </div>
    </div>
  )
}
export default Login;