import React,{Component} from "react";
import Userfront from "@userfront/core";

export default class Forgot extends Component{
    handleSubmit = e =>{
        e.perventDefault();
    };
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>Forgot Password</h3>

           

            <div className="form-group" >
                <label>Email</label>

                <input type="email" className="form-control" placeholder="Email"
                onChange={e => this.email = e.target.value}/>
            </div>

             <br />          
            <button className="btn btn-primary btn-block">Submit</button>
        </form>
        )
    }
    
}