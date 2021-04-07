import classes from "./PartEditorComponent.module.css";

const PartEditorComponent = ({type}) => {
    return ( 
        <div className={classes.PartEditorComponent}>
            {type}
        </div>
     );
}
 
export default PartEditorComponent;