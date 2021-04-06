import classes from "./Nav.module.css";
import logo from "../../images/logo.png"

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
            <img src={logo} alt=""/>
        </div>
     );
}
 
export default Nav;