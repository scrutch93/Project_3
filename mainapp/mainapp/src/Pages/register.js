import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form id="login">
                <h3>Create Account</h3>

                <div className="form-group">
                    <label id= "labelone">Email address</label>
                    <input id='inputemail' type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label id="labeltwo">Password</label>
                    <input id='inputpassword'  type="password" className="form-control" placeholder="Enter Password" />
                </div>

                <button id='signbtn' type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already have an acoount <a href="/login">Sign in!</a>
                </p>
            </form>
        );
    }
}