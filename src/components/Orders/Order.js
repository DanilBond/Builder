import ModalPart from "../ModalPart/ModalPart";
import classes from "./Order.module.css";

const Order = (
        {name, total, address, phone,
            exteriorName, exteriorPrice, 
            cpuName, cpuPrice, 
            gpuName, gpuPrice, 
            mainboardName, mainboardPrice, 
            ramName, ramPrice, 
            hddName, hddPrice, 
            powerName, powerPrice, 
            audioName, audioPrice, 
        }
    ) => {
    return ( 
        <div className={classes.Order}>
            <div className={classes.Total}>
                <div className={classes.textPar}>
                    <span className={classes.span}>Total: {total}$</span>
                    <span className={classes.span}>Name: {name}</span>
                    <span className={classes.span}>Address: {address}</span>
                    <span className={classes.span}>Phone: {phone}</span>
                </div>
            </div>
            <ModalPart Name={exteriorName} Price={exteriorPrice}/>
            <ModalPart Name={cpuName} Price={cpuPrice}/>
            <ModalPart Name={gpuName} Price={gpuPrice}/>
            <ModalPart Name={mainboardName} Price={mainboardPrice}/>
            <ModalPart Name={ramName} Price={ramPrice}/>
            <ModalPart Name={hddName} Price={hddPrice}/>
            <ModalPart Name={powerName} Price={powerPrice}/>
            <ModalPart Name={audioName} Price={audioPrice}/>
        </div>
     );
}
 
export default Order;