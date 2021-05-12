import classes from "./DrawerBurger.module.css";

const DrawerBurger = ({setDrawerState, state}) => {
    return ( 
        <div className={classes.DrawerBurger} onClick={
            function(){
                setDrawerState(!state);
                console.log(state);
            }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
     );
}
 
export default DrawerBurger;