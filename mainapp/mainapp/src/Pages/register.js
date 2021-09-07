import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form id="login">
                <h3>Create Account</h3>

                <div className="form-group">
                    <label>Email</label> <br></br>
                    <input id='input'type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label>Password</label> <br></br>
                    <input id='input'type="password" className="form-control" placeholder="Enter Password" />
                </div>

                <button id='logBtn' type="submit" className="btn btn-primary btn-block">Create Account</button>
                <p className="forgot-password text-right">
                    Already have an account? <a href="/login">Sign in!</a>
                </p>
            </form>
        );
    }
}