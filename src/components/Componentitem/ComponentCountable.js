const ComponentCountable = ({price, name, type, classes, url, setUrl, onStartLoadingEvent, setSelected}) => {
    return (
        <div onClick={()=>{setUrl(url); onStartLoadingEvent(); setSelected({type:type, name:name, price:price});}}> 
        <div className={classes.PartCC} >
            <div className={classes.ParentCC}>
            <span className={classes.NameCC}>{name}</span>
            <div className={classes.OneLineFlex}>
            <span className={classes.PriceCC}>{price}</span>
            <input type="number" min="1" max="4"></input>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default ComponentCountable;