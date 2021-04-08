const ComponentCountable = ({price, name, classes, url, setUrl}) => {
    return (
        <div onClick={()=>{setUrl(url)}}> 
        <div className={classes.PartCC} >
            <div className={classes.ParentCC}>
            <span className={classes.NameCC}>{name}</span>
            <div className={classes.OneLineFlex}>
            <span className={classes.PriceCC}>{price}</span>
            <input type="number" value={1}></input>
            </div>
            </div>
        </div>
        </div>
     );
}
 
export default ComponentCountable;