import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import fire from "../../fire";
import classes from "./CheckoutNav.module.css";
import SwitchTheme from "./Switch/Switch";

const CheckoutNav = ({theme, settheme}) => {
    let [logout, setLogout] = useState([<></>, localStorage.getItem('user') ? <><div className={classes.underline} onClick={()=>{
        fire.auth().signOut();
        localStorage.setItem("user", "");
        setRedirect(true);
    }}>LOGOUT</div></> : <></>]);
    let [redirect, setRedirect] = useState(false);
    
    let Dark = <>
    <div className={classes.Nav}>
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <SwitchTheme theme={theme} settheme={settheme}theme={theme}/>
            <h3 className={classes.menubutton}>
            <Link className={classes.Link} to="/"><div className={classes.underline} >BUILDER</div></Link>
            </h3>
            
            <h3 className={classes.menubutton}>
                {logout}
                
            </h3>
            </div>
            
            
        </div>
    </>;
    let Light = <>
    <div className={classes.NavLight}>
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <SwitchTheme theme={theme} settheme={settheme} theme={theme}/>
            <h3 className={classes.menubutton}>
            <Link className={classes.Link} to="/"><div className={classes.underline} >BUILDER</div></Link>
            </h3>
            
            <h3 className={classes.menubutton}>
            {logout}
                
            </h3>
            </div>
            
            
        </div>
    </>;
let [Result, setResult] = useState(Dark);
useEffect(function(){
    if(theme == true){
        setResult(Dark);
    }
    if(theme == false){
        setResult(Light);
    }
    
}, [theme]);

useEffect(function(){
    if(localStorage.getItem("theme") == "true"){
        setResult(Dark);
    }
    if(localStorage.getItem("theme") == "false"){
        setResult(Light);
    }
}, []);
    
    if(redirect == true){
        return <Redirect to="/" />;
    }
    else{

    return(
        <>{Result}</>
    );
    }
}
 
export default CheckoutNav;