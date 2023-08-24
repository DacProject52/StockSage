import React,{Component} from "react";
import {Link} from "react-router-dom";

export default class Login extends Component{

    handleSubmit = e => {
        e.preventDefault();

        const data ={
            email: this.email,
            password: this.password
        }

        console.log(data);
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Login</h3>

           

            <div className="form-group" >
                <label>Email</label>

                <input type="email" className="form-control" placeholder="Email"
                onChange={e => this.email = e.target.value}/>
            </div>

            <div className="form-group" >
                <label>Password</label>

                <input type="password" className="form-control" placeholder="Password"
                onChange={e => this.password = e.target.value}/>
            </div>


            <div className="form-group" >
            <button className="btn btn-primary btn-block">Login</button>
            </div>

            <p className="forgot-password text-right">
                <Link to={'/forgot'}>Forgot Password?</Link>
            </p>
        </form>
        )
    }
}