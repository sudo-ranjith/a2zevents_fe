import "./Form.css";
import React, {  useEffect } from "react";


  export default function Form()
{ 
    useEffect(() => {
      var modal = document.getElementById("myForm");
      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
    });
  
  return(
        <div>
          <button className="btn btn-primary" id="myBtn" onClick={()=>
                  {
                      var modal = document.getElementById("myForm");
                      modal.style.display = "block";
                  }}
                  >Open Modal</button>
          <div id="myForm" className="myForm">
                  
            <div className="myForm-content" >
              <span className="close" onClick={()=>
                {
                    var modal = document.getElementById("myForm");
                    modal.style.display = "none";
                }}>&times;</span>
                <div class="container">
                  <h2>Stacked form</h2>
                  <form action="/action_page.php">
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div class="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                    </div>
                    <div class="form-group form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember"/> Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
            </div>
          </div>
        </div>
   
  );
}
