import { useState } from "react";
import LinesData from "../Lines/LinesData";
import CheckoutNav from "../Nav/CheckoutNav";
import Order from "./Order";
import classes from "./Orders.module.css";

const Orders = () => {
    let [mouseData, setMouseData] = useState({});
    let [theme, setTheme] = useState(true);
    
    return ( 
        <div className={classes.Orders} onMouseMove={(arg)=>{ setMouseData(arg);}}>
            <LinesData mouseData={mouseData}/>
            <CheckoutNav theme={theme} settheme={setTheme}/>
            <div className={classes.List}>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
                <Order/>
            </div>
        </div>
     );
}
 
export default Orders;