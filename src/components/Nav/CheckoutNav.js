import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./CheckoutNav.module.css";
import SwitchTheme from "./Switch/Switch";

const CheckoutNav = ({theme, settheme}) => {
    
    let Dark = <>
    <div className={classes.Nav}>
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <SwitchTheme theme={theme} settheme={settheme}theme={theme}/>
            <h3 className={classes.menubutton}>
            <Link className={classes.Link} to="/"><div className={classes.underline} >BUILDER</div></Link>
            </h3>
            
            <h3 className={classes.menubutton}>
                <div className={classes.underline} >CHECKOUT</div>
                
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
                <div className={classes.underline} >CHECKOUT</div>
                
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
    console.log(theme);
}, [theme]);
    // let Dark = <>
    // <div className={classes.Nav}>
    //         {/* <img src={logo} alt=""/> */}
    //         <div className={classes.logo}>PCBUILDER</div>
    //         <div className={classes.RightSide}>
    //         <SwitchTheme theme={theme} settheme={settheme}/>
    //         <h3 className={classes.menubutton}>
    //             {/* <a href=''>BUILDER</a> */}
    //             <div className={classes.underline} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
    //         </h3>
            
    //         <h3 className={classes.menubutton}>
    //             {/* <a href=''>ORDER</a> */}
    //             <div className={classes.underline} onClick={()=>{setWindowState("Open");}}>CHECKOUT</div>
                
    //         </h3>
    //             {/* <div>BUILDER</div>
    //             <div>ORDER</div> */}
    //         </div>
    //         <DrawerBurger state={state} setDrawerState={setDrawerState}/>
            
    //     </div>
    // </>

    // let Light = <>
    // <div className={classes.NavLight}>
    //         {/* <img src={logo} alt=""/> */}
    //         <div className={classes.logo}>PCBUILDER</div>
    //         <div className={classes.RightSide}>
    //         <SwitchTheme theme={theme} settheme={settheme}/>
    //         <h3 className={classes.menubutton}>
    //             {/* <a href=''>BUILDER</a> */}
    //             <div className={classes.underline} onClick={()=>{if(windowState != "Hide"){setWindowState("Close");}}}>BUILDER</div>
    //         </h3>
            
    //         <h3 className={classes.menubutton}>
    //             {/* <a href=''>ORDER</a> */}
    //             <div className={classes.underline} onClick={()=>{setWindowState("Open");}}>CHECKOUT</div>
    //         </h3>
    //             {/* <div>BUILDER</div>
    //             <div>ORDER</div> */}
    //         </div>
    //         <DrawerBurger state={state} setDrawerState={setDrawerState}/>
    //     </div>
    // </>
    // let [Result, setResult] = useState(<></>);
    // useEffect(function(){
    //     if(theme == true){
    //         setResult(Dark);
    //     }
    //     if(theme == false){
    //         setResult(Light);
    //     }
    //     console.log(theme);
    // }, [theme]);
    // return ( 
    //     <>{Result}</>
    //  );

    return(
        <>{Result}</>
    );
}
 
export default CheckoutNav;