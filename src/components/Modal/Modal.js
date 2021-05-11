import { useEffect, useState } from "react";
import ModalPart from "../ModalPart/ModalPart";
import classes from "./Modal.module.css";

const Modal = ({state, setWindowState, orderObj, TotalPrice}) => {
    let[ClassName, setClassName] = useState(classes.ModalHide);

    useEffect(()=>{
        switch(state){
            case "Open":
                setClassName(classes.ModalOpen);
                break;
                
            case "Close":
                setClassName(classes.ModalClose);
                break;
                
            case "Hide":
                setClassName(classes.ModalHide);
                break;
        }
    }, [state]);

    const results = orderObj.map(order => <ModalPart key={order.id} Name={order.name} Price={order.price} {...order} />);

    useEffect(function(){
        console.log(Object.values(orderObj));
    },[orderObj]);


    return ( 
        <div className={ClassName} onClick={()=>{setWindowState("Close");}}>
            <div className={classes.Info}>
                <div className={classes.TotalPrice}>Total: {TotalPrice} $
            </div>
                <div className={classes.BackgroundOrder}>
                    <div className={classes.Order}>Order</div>
                </div>
            </div>
            <div className={classes.Parent}>
            <div className={classes.Items}>
            {results}
            </div>
            
            </div>
            
        </div>
     );
}
 
export default Modal;