import React from "react";
// import {ReactComponent as Logo} from 


class login extends React.Component {
    state={
        username:'',
        email: '',
        pwd: '',
    }
    handleChange = (e) => {
const {name, value} = e.target
this.setState({[name]:value})
    }

    handleSubmit = (e) => {

    }
    render() {
        return (
        <div>
            <form>
                <input type='username' name='username' placeholder='User Name...' required onChange={this.handleChange}/>
                <input type='email' name='email' placeholder='email...' onChange={this.handleChange}/>
                <input type='password' name='pwd' placeholder='password....' required onChange={this.handleChange}/>
                <input type="checkbox" className="check-box"><span>Remember Password</span></input>
                <button type="submit" className="submit-btn">Log In</button>
                <form id="register" className="input-group"></form>
                <input type="text" className="input-field" placeholder="User name" required></input>
                <input type="email" className="input-field" placeholder="Email Id" required></input>
                <input type="checkbox" className="check-box"><span>I agree to the terms & conditions</span></input>
                <button type="submit" className="submit-btn">Register</button>
            </form>
            </div >
        )
}
}
export default login;






// import React from 'react'

// const logIn = () => {
//     return (
//         <>
//             <div className="form-box">
//                 <div clasName="button-box"></div>
//                 <div id="btn"></div>
//                 <button type="button" className="toggle-btn" onclick="login()">Log In</button>
//                 <button type="button" className="toggle-btn" onclick="register()">Register</button>
//                 <form id="login" className="input-group"></form>
//                 <input type="text" className="input-field" placeholder="User name" required></input>
//                 <input type="text" className="input-field" placeholder="Enter Password" required></input>
//                 <input type="checkbox" className="check-box"><span>Remember Password</span></input>
//                 <button type="submit" className="submit-btn">Log In</button>
//                 <form id="register" className="input-group"></form>
//                 <input type="text" className="input-field" placeholder="User name" required></input>
//                 <input type="email" className="input-field" placeholder="Email Id" required></input>
//                 {/* <!-- <input type="text" className="input-field" placeholder="Enter Passowrd" required> --> */}
//                 <input type="checkbox" className="check-box"><span>I agree to the terms & conditions</span></input>
//                 <button type="submit" className="submit-btn">Register</button>

                {/* <script>
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");

    function register(){
      x.style.left = "-400px";
      y.style.left = "50px";
      z.style.left = "110px";
    }
    
    function login(){
      x.style.left = "50px"
      y.style.left = "450px";
      z.style.left = "0";
    }
  </script> */}

//             </div>
//         </>
        
//     )
// }