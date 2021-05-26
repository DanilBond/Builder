import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalPart from "../ModalPart/ModalPart";
import classes from "./Modal.module.css";

const Modal = ({state, setWindowState, orderObj, TotalPrice, theme}) => {
    let[ClassName, setClassName] = useState(classes.ModalHide);
    let Classes = [classes.Parent, theme ? classes.Parent : classes.ParentLight];
    let ClassesInfo = [classes.Info, theme ? classes.Info : classes.InfoLight];
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
            
            <div className={classes.InfoBack}>
            <div className={ClassesInfo.join(" ")}>
                <div className={classes.TotalPrice}>Total: {TotalPrice} $
            </div>
            <div className={classes.BackgroundOrder}>
                    
                    <Link className={classes.Link} to="/checkout"><div className={classes.Order}>Order</div></Link>
                </div>
            </div>
                
            </div>
            <div className={Classes.join(" ")}>
            <div className={classes.Items}>
            {results}
            </div>
            
            </div>
            
        </div>
     );
}
 
export default Modal;