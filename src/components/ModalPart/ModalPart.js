import { useEffect } from "react";
import classes from "./ModalPart.module.css";

const ModalPart = ({Name, Price}) => {
    
    let Classes = [classes.ModalPart, (Name != "None" && Price != 0) ? classes.ModalPart : classes.Hide];
    
    return ( 
        <div className={Classes.join(" ")}>
            
            <span className={classes.Name}>{Name}</span>
            <span className={classes.Price}>{Price}</span>
        </div>
     );
}
 
export default ModalPart;