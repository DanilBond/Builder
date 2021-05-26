import classes from "./Checkout.module.css";
import Nav from "../Nav/Nav";
import { useState } from "react";
import LinesData from "../Lines/LinesData";
import CheckoutNav from "../Nav/CheckoutNav";

const Checkout = () => {
    let [mouseData, setMouseData] = useState({});
    let [theme, setTheme] = useState(true);

    return ( 
        <div className={classes.Checkout} onMouseMove={(arg)=>{ setMouseData(arg);}}>
            <LinesData mouseData={mouseData}/>
            <CheckoutNav theme={theme} settheme={setTheme}/>
        </div>
     );
}
 
export default Checkout;