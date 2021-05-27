import classes from "./Switch.module.css";


const Switch = ({theme, settheme}) => {
    return ( 
        <div className={classes.Parent}>
            <input className={classes.Switch} type="checkbox" id="switch" 
            onClick={function(){
                settheme(!theme);
                console.log(theme);
                // store.dispatch({ type: 'ADD_THEME', theme: !store.getState() });
                // console.log(store.getState());
            }
        }/><label className={classes.label} for="switch">Toggle</label>
        </div>
     );
}
 
export default Switch;
