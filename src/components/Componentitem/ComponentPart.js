const ComponentPart = ({price, name, classes, url, setUrl, type, setStyle}) => {
    return (
        <div onClick={()=>{setUrl(url)}}> 
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