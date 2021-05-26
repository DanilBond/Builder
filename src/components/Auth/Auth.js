import { useEffect, useState } from "react";
import fire from "../../fire";
import classes from "./Auth.module.css";
import SingIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const handleSignIn = () =>{
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err => {
            console.log(err.message);
        })
        
    }
    const handleSignUp = () =>{
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err => {
            console.log(err.message);
        })
        
    }

    return ( 
        <div className={classes.Auth}>
            <h1>Welcome</h1>
            <form className={classes.Form}>

            <input 
            type="email"
            placeholder="E-mail" 
            name="email" 
            required 
            className={classes.Input} 
            onChange={(e)=>{setEmail(e.target.value)}}/>

            <input 
            type="password" 
            placeholder="Password" 
            name="password" 
            required 
            minLength="6"  
            className={classes.Input}
            onChange={(e)=>{setPassword(e.target.value)}}/>


            <div className={classes.ButtonParent}>
            <div onClick={()=>{
                handleSignIn()
            }}><SingIn/></div>

            <div onClick={()=>{
                handleSignUp()
            }}><SignUp/></div>
            </div>
            </form>
        </div>
     );
}
 
export default Auth;