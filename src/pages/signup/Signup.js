import React, { useState } from 'react'
import Login from '../login/login';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <div class="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={require('../../Assets/images/signup/Data_security_05.jpg')} width={500} />
                    </div>
                    <div className="col-md-6 bg-light">
                        <form action="">
                            <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputname"
                                    aria-describedby="emailHelp" required

                                />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="customFile">
                                    Photo
                                </label>
                                <input type="file" class="form-control" id="customFile" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputphoto" class="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Phone No
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleInputphone no"
                                    aria-describedby="emailHelp"
                                // max={10}
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
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">
                                    CPassword
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputC Password1"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary" >
                                Submit
                            </button>
                        </form>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Signup;
