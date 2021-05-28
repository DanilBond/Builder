import { useEffect, useState } from "react";
import fire from "../../fire";
import classes from "./Auth.module.css";
import SingIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {

    let [user, setUser] = useState('');
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

    const handleLogout=()=>{
        fire.auth().signOut();
        localStorage.setItem("user", "");
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged(u => {
            if(u){
                setUser(u);
            }else{
                setUser("");
            }
        })
    }

    useEffect(()=>{
        authListener();
    },[]);

    useEffect(()=>{
        if(user){
            localStorage.setItem("user", user.uid);
        }
    },[user])


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

            <div onClick={()=>{handleLogout();}}>
            Logout
            </div>

            <div onClick={()=>{console.log(user);}}>
            GetInfo
            </div>

            </form>
        </div>
     );
}
 
export default Auth;