const ComponentPart = ({price, name, type, classes, url, setUrl, onStartLoadingEvent, setSelected}) => {
    return (
        <div onClick={()=>{setUrl(url); onStartLoadingEvent(); setSelected({type:type, name:name, price:price});}}> 
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