import ModalPart from "../ModalPart/ModalPart";
import classes from "./Order.module.css";

const Order = () => {
    return ( 
        <div className={classes.Order}>
            <div className={classes.Total}>
            <span className={classes.span}>Total: 500000$</span>
            </div>
            <ModalPart/>
            <ModalPart/>
            <ModalPart/>
        </div>
     );
}
 
export default Order;