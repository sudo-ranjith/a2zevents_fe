import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup()
{
    return(
        <div>
          <div class="back">
            <div class="div-center">
              <div class="content">
                  <h3>Signup</h3>
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
                      <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <Link to="/login">
                        <button type="submit" class="btn btn-primary">Signup</button>
                      </Link>
                      
                    </form>
              </div>
            </div>
          </div>
       </div>
    );
}

export default Signup;