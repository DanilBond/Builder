import { useEffect, useState } from "react";

const ComponentCountable = ({price, name, type, classes, url, setUrl, onStartLoadingEvent, setSelected}) => {
    let [canStartLoad, setCanStartLoad] = useState(true);
    let [count, setCount] = useState(1);
    function disableMe(){
        if(canStartLoad){
            onStartLoadingEvent();
        }
        setCanStartLoad(false);
    }
    return (
        <div onClick={()=>{setUrl(url); disableMe(); setSelected({type:type, name:name, price:parseInt(price)*count});}}> 
        <div className={classes.PartCC} >
            <div className={classes.ParentCC}>
            <span className={classes.NameCC}>{name}</span>
            <div className={classes.OneLineFlex}>
            <span className={classes.PriceCC}>{price}</span>
            <input type="number" min="1" max="4" onChange={
                 function(event){setCount(event.target.value);
                 setSelected({type:type, name:name, price:parseInt(price)*event.target.value}); 
                 console.log(parseInt(price)*event.target.value);
                 if(event.target.value > 4){setSelected({type:type, name:name, price:parseInt(price)*4});
                 event.target.value = 4;}
                 if(event.target.value < 1){setSelected({type:type, name:name, price:parseInt(price)});
                 event.target.value = 1;}
                 }}/>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default ComponentCountable;