import React, {useState,useEffect} from 'react'
import UserService from '../service/UserService'

const ListUser = () => {
    const [user, setuser] = useState([])
   
    useEffect(() => {
        
        UserService.getAllUser().then((response)=>{
            setuser(response.data)
            console.log(response.data);

        }).catch(error=>{
            console.log(error);
        })
    
    }, [])
    
   
    return (
        <div className= "container">
            <h2 className ="text-center">Users Data</h2>
            <table className = "table table-bordered table-striped">
                <thead>
                    <th>UID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>CONTACT</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>CONFIRMPASSWORD</th>
                </thead>
                <tbody>
                    {
                        user.map(
                            user=>
                            <tr key = {user.uid}>
                                <td>{user.uid}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.contact}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.confirmpassword}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
      )
    }
    
    export default ListUser