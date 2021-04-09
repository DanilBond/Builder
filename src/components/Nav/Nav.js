import classes from "./Nav.module.css";
import logo from "../../images/logo.png"

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
            <img src={logo} alt=""/>
            <div className={classes.RightSide}>
            <div>Order</div>
            </div>
        </div>
     );
}
 
export default Nav;