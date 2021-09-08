import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form id="login">
                <h3>Create Account</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input id='input' type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id='input'  type="password" className="form-control" placeholder="Enter Password" />
                </div>

                <button id='logbtn' type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already have an acoount <a href="/login">Sign in!</a>
                </p>
            </form>
        );
    }
}