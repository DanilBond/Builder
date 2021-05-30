import { useEffect } from "react";
import classes from "./Price.module.css";

const Price = ({price, setWindowState, selected, setOrderObj, orderObj, theme}) => {
    
    let ClassesPrice = [classes.Background, theme ? classes.Background : classes.BackgroundLight];
    let ClassesOrder = [classes.BackgroundOrder, theme ? classes.BackgroundOrder : classes.BackgroundOrderLight];
    let ClassesAdd = [classes.BackgroundAdd, theme ? classes.BackgroundAdd : classes.BackgroundAddLight];

    useEffect(function(){
       // Object.values(orderObj).map((i) => {setPrice(price+=i.price);});
    },[orderObj]);

    return (
        <>
        <div className={classes.Price}>
            <div className={ClassesAdd.join(" ")}>
                <div className={classes.Add} onClick={()=>{
                    switch(selected.type){
                        case "exterior":
                        setOrderObj([
                            {type:"exterior",name:selected.name,price:selected.price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "cpu":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:selected.name,price:selected.price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "gpu":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:selected.name,price:selected.price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "mainboard":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:selected.name,price:selected.price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "ram":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:selected.name,price:selected.price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "hdd":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:selected.name,price:selected.price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "power":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:selected.name,price:selected.price,},
                             {type:"audio",name:Object.values(orderObj)[7].name,price:Object.values(orderObj)[7].price,},
                        ]);    
                        break;

                        case "audio":
                        setOrderObj([
                            {type:"exterior",name:Object.values(orderObj)[0].name,price:Object.values(orderObj)[0].price,},
                             {type:"cpu",name:Object.values(orderObj)[1].name,price:Object.values(orderObj)[1].price,},
                             {type:"gpu",name:Object.values(orderObj)[2].name,price:Object.values(orderObj)[2].price,},
                             {type:"mainboard",name:Object.values(orderObj)[3].name,price:Object.values(orderObj)[3].price,},
                             {type:"ram",name:Object.values(orderObj)[4].name,price:Object.values(orderObj)[4].price,},
                             {type:"hdd",name:Object.values(orderObj)[5].name,price:Object.values(orderObj)[5].price,},
                             {type:"power",name:Object.values(orderObj)[6].name,price:Object.values(orderObj)[6].price,},
                             {type:"audio",name:selected.name,price:selected.price,},
                        ]);    
                        break;
                    }
                    
                }}>Add</div>
            </div>
            <div className={ClassesPrice.join(" ")}>
                <div className={classes.Text}>Price: {price} ₽</div>
            </div>
            <div className={ClassesOrder.join(" ")} onClick={()=>{setWindowState("Open")}}>
                <div className={classes.Order}>Order</div>
            </div>
        </div>

        </>
     );
}
 
export default Price;