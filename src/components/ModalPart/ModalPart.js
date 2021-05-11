import { useEffect } from "react";
import classes from "./ModalPart.module.css";

const ModalPart = ({Name, Price}) => {
    
    return ( 
        <div className={classes.ModalPart}>
            
            <span className={classes.Name}>{Name}</span>
            <span className={classes.Price}>{Price}</span>
        </div>
     );
}
 
export default ModalPart;