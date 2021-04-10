import classes from "./Price.module.css";

const Price = ({price, setWindowState}) => {
    return (
        <>
        <div className={classes.Price}>
            <div className={classes.BackgroundAdd}>
                <div className={classes.Add}>Add</div>
            </div>
            <div className={classes.Background}>
                <div className={classes.Text}>Price: {price} ₽</div>
            </div>
            <div className={classes.BackgroundOrder} onClick={()=>{setWindowState("Open")}}>
                <div className={classes.Order}>Order</div>
            </div>
        </div>

        </>
     );
}
 
export default Price;