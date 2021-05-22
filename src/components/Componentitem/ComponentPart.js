import { useEffect } from "react";

const ComponentPart = ({price, name, type, classes, url, setUrl, onStartLoadingEvent, setSelected}) => {
    let canStartLoad = true;
    function disableMe(){
        if(canStartLoad){
            onStartLoadingEvent();
        }
        canStartLoad = false;
    }
    return (
        <div onClick={()=>{setUrl(url); disableMe(); setSelected({type:type, name:name, price:price}); }}> 
        <div className={classes.Part} >
            <div className={classes.ParentCP}>
            <span className={classes.NameCP}>{name}</span>
            <span className={classes.Price}>{price}</span>
            
            </div>
        </div>
        </div>
     );
}
 
export default ComponentPart;