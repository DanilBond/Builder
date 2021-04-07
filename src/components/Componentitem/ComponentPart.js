const ComponentPart = ({price, name, classes}) => {
    return ( 
        <div className={classes.Part} >
            <div className={classes.ParentCP}>
            <span className={classes.NameCP}>{name}</span>
            <span className={classes.Price}>{price}</span>
            
            </div>
        </div>
     );
}
 
export default ComponentPart;