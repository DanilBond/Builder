import classes from "./ModalPart.module.css";

const ModalPart = () => {
    return ( 
        <div className={classes.ModalPart}>
            <span className={classes.Name}>It's a name</span>
            <span className={classes.Price}>5000 $</span>
        </div>
     );
}
 
export default ModalPart;