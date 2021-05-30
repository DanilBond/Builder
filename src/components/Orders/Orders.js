import axios from "axios";
import { useEffect, useState } from "react";
import LinesData from "../Lines/LinesData";
import CheckoutNav from "../Nav/CheckoutNav";
import Order from "./Order";
import classes from "./Orders.module.css";

const Orders = () => {
    let [mouseData, setMouseData] = useState({});
    let [theme, setTheme] = useState(Boolean(localStorage.getItem('theme')));
    
    let [orders, setOrders] = useState([]);
    let [result, setResult] = useState([]);
    useEffect(()=>{
        
        axios.get('https://pcbuilder-989af-default-rtdb.firebaseio.com/orders/' + localStorage.getItem("user") + ".json")
        .then(function (response) {
            try{
                setOrders(Object.values(response.data));
            }
            catch{}
        })
        
    },[]);
    useEffect(()=>{
        setResult([]);
        for (const i of Object.values(orders)) {
            setResult((old)=>[...old,
            <Order 
            total={i.totalPrice} 
            phone={i.phone} 
            address={i.address} 
            name={i.name} 
            theme={theme}

            exteriorName={i.exterior}
            cpuName={i.cpu}
            gpuName={i.gpu}
            mainboardName={i.mainboard}
            ramName={i.ram}
            hddName={i.hdd}
            powerName={i.power}
            audioName={i.audio}
            />]);
        }
    },[orders,theme]);

    return ( 
        <div className={classes.Orders} onMouseMove={(arg)=>{ setMouseData(arg);}}>
            <LinesData mouseData={mouseData}/>
            <CheckoutNav theme={theme} settheme={setTheme}/>
            <div className={classes.List}>
                {result}
            </div>
        </div>
     );
}
 
export default Orders;