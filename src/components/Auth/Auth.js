import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import fire from "../../fire";
import LinesData from "../Lines/LinesData";
import Loading from "../Loading/Loading";
import CheckoutNav from "../Nav/CheckoutNav";
import PushNot from "../PushNot/PushNot";
import classes from "./Auth.module.css";
import SingIn from "./SignIn";
import SignUp from "./SignUp";


const Auth = () => {

    let [user, setUser] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [error, setError] = useState('');
    let [mouseData, setMouseData] = useState({});
    let [theme, setTheme] = useState(true);
    let [redirect, setRedirect] = useState(false);
    let [errorResult, setErrorResult] = useState(<></>);
    let [loading, setLoading] = useState(<></>);

    useEffect(()=>{
        if(error != ""){
        
        setErrorResult(<PushNot message={error}/>);
        let timer = setTimeout(() => {
            setError("");
            setErrorResult(<></>);
            console.log("tm");
          }, 3000);
         
        }
        
    },[error]);


    const handleSignIn = () =>{
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(err => {
            setError(err.message);
            setLoading(<></>);
        })
        
    }
    const handleSignUp = () =>{
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(err => {
            setError(err.message);
            setLoading(<></>);
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
                setRedirect(true);
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

    if(redirect == true){
        return <Redirect to="/" />;
    }else{

    return ( 
        <div className={classes.Back} onMouseMove={(arg)=>{ setMouseData(arg);}}>
     {errorResult}
    <LinesData mouseData={mouseData}/>
    <CheckoutNav theme={theme} settheme={setTheme} theme={theme}/>
    <div className={classes.AuthBack}>
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
                setLoading(<Loading/>);
            }}><SingIn/></div>

            <div onClick={()=>{
                handleSignUp()
                setLoading(<Loading/>);
            }}><SignUp/></div>
            </div>

            

            </form>
            <br/>
            {loading}
        </div>
        
        </div>
        
        </div>
     );
        }
     
}
 
export default Auth;