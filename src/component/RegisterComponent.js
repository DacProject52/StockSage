import React,{useState} from 'react'
import UserService from '../service/UserService'
import { CiCircleAlert } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

const RegisterComponent = () => {
    const [uid, setuid] = useState('')
     const [firstname, setfirst] = useState('')
     const [lastname, setlast] = useState('')
     const [email, setemail] = useState('')
     const [contact, setcontact] = useState('')
     const [password, setpassword] = useState('')
     const [confirmpassword, setconfirmpassword] = useState('')

     const [lowerValidated, setLowerValidated]=useState(false);
     const [upperValidated, setUpperValidated]=useState(false);
     const [numberValidated, setNumberValidated]=useState(false);
     const [specialValidated, setSpecialValidated]=useState(false);
     const [lengthValidated, setLengthValidated]=useState(false);



     const handleValidation=(value)=>{
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')
      
        if(lower.test(value)){
          setLowerValidated(true);
        }
        else{
          setLowerValidated(false);
        }
        if(upper.test(value)){
          setUpperValidated(true);
        }
        else{
          setUpperValidated(false);
        }
        if(number.test(value)){
          setNumberValidated(true);
        }
        else{
          setNumberValidated(false);
        }
        if(special.test(value)){
          setSpecialValidated(true);
        }
        else{
          setSpecialValidated(false);
        }
        if(length.test(value)){
          setLengthValidated(true);
        }
        else{
          setLengthValidated(false);
        }
      }

     const saveUser=(e) =>{
        e.preventDefault();
        const user= {uid,firstname, lastname, email,contact, password, confirmpassword}
        console.log(user)
        UserService.createUser(user).then((response)=>{
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
     }

    return (
        <form >
            <h3>Sign Up</h3>
            <div className="form-group" >
                <label>User Name</label>

                <input type="text" value={uid} className="form-control" placeholder="User Id"
                    onChange={e => setuid(e.target.value)}/>
                    
                    
            </div>
            <div className="form-group" >
                <label>First Name</label>

                <input type="text" value={firstname} className="form-control" placeholder="First Name"
                    onChange={e => setfirst(e.target.value)}/>
                    
            </div>

            <div className="form-group" >
                <label>Last Name</label>

                <input type="text" value={lastname} className="form-control" placeholder="Last Name"
                    onChange={e => setlast(e.target.value)}/>
                    </div>
            <div className="form-group" >
                <label>Email</label>

                <input type="email"  value={email} className="form-control" placeholder="Email"
                onChange={e => setemail(e.target.value)}/>
            </div>
            <div className="form-group" >
                <label>contact</label>

                <input type="text"  value={contact} className="form-control" placeholder="eg: +913859237569"
                onChange={e => setcontact(e.target.value)}/>
            </div>

            <div className="form-group" >
    <label>Password</label>

    <input type="password" className="form-control" placeholder="Password"
    onChange={(e) => setpassword(e.target.value)}  onKeyUp={(e) => handleValidation(e.target.value)}/>
</div>
<div>
     <main>
     <div className={lowerValidated?'validated':'not-validated'}>
            {lowerValidated?(
              <CiCircleCheck color='green'/>  
             
            ):(
              <CiCircleAlert color='red' />  
             
            )}
            At least one lowercase letter
          </div>
          <div className={upperValidated?'validated':'not-validated'}>
            {upperValidated?(
             <CiCircleCheck color='green'/>  
            
            ):(
             <CiCircleAlert color='red'/>  
            
            )}
            At least one uppercase letter
          </div>
          <div className={numberValidated?'validated':'not-validated'}>
            {numberValidated?(
              <CiCircleCheck color='green'/>  
             
            ):(
              <CiCircleAlert color='red'/>  
             
            )}
            At least one number
          </div>
          <div className={specialValidated?'validated':'not-validated'}>
            {specialValidated?(
              <CiCircleCheck color='green'/>  
             
            ):(
              <CiCircleAlert color='red' />  
              
            )}
            At least one special character
          </div>
          <div className={lengthValidated?'validated':'not-validated'}>
            {lengthValidated?(
              <CiCircleCheck color='green'/>  
              
            ):(
              <CiCircleAlert color='red' />  
            )}
            At least 8 characters
          </div>
     </main>
</div>

            <div className="form-group" >
                <label>Confirm Password</label>

                <input type="password"  value={confirmpassword} className="form-control" placeholder="Password"
                onChange={e => setconfirmpassword(e.target.value)}/>
            </div>
            <button className="btn btn-primary btn-block" onClick={(e)=> saveUser(e)}>Sign Up</button>
        </form>
    )
}


export default RegisterComponent
        
       
// https://github.com/DacProject52/StockSage.git