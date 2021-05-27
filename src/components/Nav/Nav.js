import SwitchTheme from "./Switch/Switch";
import DrawerBurger from "../Drawer/DrawerBurger";
import classes from "./Nav.module.css";
import { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

const Nav = ({setWindowState, windowState, setDrawerState, state, theme, settheme}) => {
    

    let Dark = <>
    <div className={classes.Nav}>
            {/* <img src={logo} alt=""/> */}
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <SwitchTheme theme={theme} settheme={settheme} theme={theme}/>
            <h3 className={classes.menubutton}>
                {/* <a href=''>BUILDER</a> */}
                <div className={classes.underline} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
            </h3>
            
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <div className={classes.underline} onClick={()=>{setWindowState("Open");}}>CHECKOUT</div>
                
            </h3>
                {/* <div>BUILDER</div>
                <div>ORDER</div> */}
            </div>
            <DrawerBurger state={state} setDrawerState={setDrawerState}/>
            
        </div>
    </>

    let Light = <>
    <div className={classes.NavLight}>
            {/* <img src={logo} alt=""/> */}
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <SwitchTheme theme={theme} settheme={settheme} theme={theme}/>
            <h3 className={classes.menubutton}>
                {/* <a href=''>BUILDER</a> */}
                <div className={classes.underline} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
            </h3>
            
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <div className={classes.underline} onClick={()=>{setWindowState("Open");}}>CHECKOUT</div>
            </h3>
                {/* <div>BUILDER</div>
                <div>ORDER</div> */}
            </div>
            <DrawerBurger state={state} setDrawerState={setDrawerState}/>
        </div>
    </>
    let [Result, setResult] = useState(Dark);


    useEffect(function(){
        if(theme == true){
            setResult(Dark);
        }
        if(theme == false){
            setResult(Light);
        }
        console.log(theme);
    }, [theme]);

    
    return ( 
        <>{Result}</>
     );
}
 
export default Nav;
//https://danil-bondarev.netlify.app/static/media/i3.png