import React from "react";
import { Redirect, useHistory } from "react-router";
import Navbar from "../component/Navbar";
import { isLogin } from "../utils/Auth";
import Login from "./Login";



class NavAuth extends React.Component {

    constructor(props) {
        super(props);

        this.state = { auth: isLogin() }
    }



    render() {

        if (!this.state.auth) {
            return (
                <div>
                    <Redirect to="/login" />
                    <Login />
                </div>
            );

        }
        else {

            return (
                <div>

                    <Redirect to="/" />
                    <Navbar authorized={this.auth} />


                </div>
            );
        }
    }


}


export default NavAuth;