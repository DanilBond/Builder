import { useEffect, useState } from "react";
import classes from "./DrawerMobile.module.css";

const DrawerMobile = ({state, setDrawerState}) => {
    let [Drawer, setDrawer] = useState(<></>)
    useEffect(function(){
        if(state){
            setDrawer(<><div className={classes.DrawerBackdropOpen} onClick={function(){setDrawerState(false)}}>
                <div className={classes.DrawerMobileOpen}></div>
                </div></>)
        }
        else{
            setDrawer(<><div className={classes.DrawerBackdropClose}>
                <div className={classes.DrawerMobileClose}></div>
                </div></>)
        }
    },[state]);
    return ( 
    <>
    {Drawer}
    </>
    );
}
 
export default DrawerMobile;