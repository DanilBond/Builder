import { useEffect, useState } from "react";
import classes from "./DrawerMobile.module.css";

const DrawerMobile = ({state}) => {
    let [Drawer, setDrawer] = useState(<></>)
    useEffect(function(){
        if(state){
            setDrawer(<><div className={classes.DrawerBackdropOpen}>
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
    // <div className={classes.DrawerBackdropOpen}>
    //     <div className={classes.DrawerMobileOpen}></div>
    // </div> 
    <>
    {Drawer}
    </>
    );
}
 
export default DrawerMobile;