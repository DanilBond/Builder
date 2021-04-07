import classes from "./Drawer.module.css";
import img from "../../images/yellowblack.png"
import ControlLeft from "../Controls/ControlLeft";

const Drawer = () => {
    
    return ( 
        <div className={classes.Drawer}>
            
            <span><img src={img} alt="" style={{
            position: 'absolute',
            marginBottom: '50px',
            width: '800px',
            height: '424px',
            filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 1))',
        }}/></span>
        
        </div>
     );
}
 
export default Drawer;