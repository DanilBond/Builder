import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fire from "../../fire";
import classes from "./DrawerMobile.module.css";

const DrawerMobile = ({state, setDrawerState, setWindowState, windowState, theme}) => {
    let [Drawer, setDrawer] = useState(<></>)
    let Classes = [classes.DrawerMobileOpenDark, theme ? classes.DrawerMobileOpenDark : classes.DrawerMobileOpenLight];
    let [login, setLogin] = useState(<>
    <Link className={classes.Link} to="/auth">
    <div className={classes.DrawerButton}>LOGIN</div>
    </Link></>)

    useEffect(()=>{
        if(localStorage.getItem("user") != ""){ // если зареган
            setLogin(<><div className={classes.DrawerButton}onClick={()=>{setWindowState("Open");}}>CHECKOUT</div>
            <Link className={classes.Link} to="/orders">
            <div className={classes.DrawerButton}>ORDERS</div>
            </Link>
            <div className={classes.DrawerButton} onClick={()=>{
            fire.auth().signOut();
            localStorage.setItem("user", "");}}>LOGOUT</div></>);
        }
        else{
            setLogin(<Link className={classes.Link} to="/auth">
            <div className={classes.DrawerButton}>LOGIN</div>
            </Link>);
        }
    },[localStorage.getItem('user')]) 

    useEffect(function(){
        if(state){
            setDrawer(<><div className={classes.DrawerBackdropOpen} onClick={function(){setDrawerState(false)}}>
                <div className={Classes.join(" ")}>
                    <div className={classes.DrawerButton} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
                    
                    {login}

                    
                </div>
                </div></>)
        }
        else{
            setDrawer(<><div className={classes.DrawerBackdropClose}>
                <div className={classes.DrawerMobileClose}></div>
                </div></>)
        }
    },[state, theme]);
    return ( 
    <>
    {Drawer}
    </>
    );
}
 
export default DrawerMobile;