const ComponentCountable = ({price, name, classes, url, setUrl, onStartLoadingEvent}) => {
    return (
        <div onClick={()=>{setUrl(url); onStartLoadingEvent()}}> 
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