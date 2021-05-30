import classes from "./PushNot.module.css";

const PushNot = ({message}) => {
    return ( 
        <div className={classes.PushNot}>
            <span>{message}</span>
        </div>
     );
}
 
export default PushNot;