import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
            {/* <img src={logo} alt=""/> */}
            <div className={classes.logo}>PCBUILDER</div>
            <div className={classes.RightSide}>
            <h3 className={classes.menubutton}>
                {/* <a href=''>BUILDER</a> */}
                <div className={classes.underline}>BUILDER</div>
            </h3>
            <h3 className={classes.menubutton}>
                {/* <a href=''>ORDER</a> */}
                <div className={classes.underline}>ORDER</div>
            </h3>
                {/* <div>BUILDER</div>
                <div>ORDER</div> */}
            </div>
        </div>
     );
}
 
export default Nav;