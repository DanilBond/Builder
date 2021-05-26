import classes from "./Switch.module.css";

const Switch = ({theme, settheme}) => {
    return ( 
        <div className={classes.Parent}>
            <input className={classes.Switch} type="checkbox" id="switch" onClick={function(){
                settheme(!theme);
            }}/><label className={classes.label} for="switch">Toggle</label>
        </div>
     );
}
 
export default Switch;
