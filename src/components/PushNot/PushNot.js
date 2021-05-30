import classes from "./PushNot.module.css";

const PushNot = ({message}) => {
    return ( 
        <div className={classes.PushNot}>
            <span className={classes.span}>{message}</span>
        </div>
     );
}
 
export default PushNot;