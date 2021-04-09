const ComponentPart = ({price, name, classes, url, setUrl, onStartLoadingEvent}) => {
    return (
        <div onClick={()=>{setUrl(url); onStartLoadingEvent()}}> 
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