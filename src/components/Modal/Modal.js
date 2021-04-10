import { useEffect, useState } from "react";
import ModalPart from "../ModalPart/ModalPart";
import classes from "./Modal.module.css";

const Modal = ({state}) => {
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
    return ( 
        <div className={ClassName}>
            <div className={classes.Info}>
                <div className={classes.TotalPrice}>Total: 7000000 $
            </div>
                <div className={classes.BackgroundOrder}>
                    <div className={classes.Order}>Order</div>
                </div>
            </div>
            <div className={classes.Parent}>
            <div className={classes.Items}>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
            </div>
            
            </div>
            
        </div>
     );
}
 
export default Modal;