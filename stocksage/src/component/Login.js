import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            pass: '',
            email: ''
        }
    }
   
    render() {
        return (
            
                <div class="login-container">
                    <h1>Login</h1>
                    <form action="./homepage.html" method="post">
                        <h4>User ID : <input type="text" name="uid" placeholder="User ID" required /></h4>
                        <h4>Password : <input type="password" name="pwd" placeholder="Password" required  /></h4>
                        <button type="submit">Login</button>
                    </form>
                    <div class="forgot-password">
                        <a href="./forgotpassword.html">Forgot Password?</a>
                        
                    </div>
                </div>
            
        )
    }
}

export default Login