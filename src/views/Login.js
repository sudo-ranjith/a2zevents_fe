import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login()
{
 
    return(
        <div>
          <div class="back">
            <div class="div-center">
              <div class="content">
                  <h3>Login</h3>
                  <hr/>
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <button type="submit" class="btn btn-primary">Login</button>
                      <hr />
                      <span>Don't have an accoun?</span>
                      <Link to="/signup" >
                      <button type="button" class="btn btn-link">Signup</button>
                      </Link>
                      
                    </form>
              </div>
            </div>
          </div>
       </div>
    );
}

export default Login;