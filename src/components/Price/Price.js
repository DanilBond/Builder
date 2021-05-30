import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import classes from "./Price.module.css";

const Price = ({price, setWindowState, selected, setOrderObj, orderObj, theme}) => {
    
    let ClassesPrice = [classes.Background, theme ? classes.Background : classes.BackgroundLight];
    let ClassesOrder = [classes.BackgroundOrder, theme ? classes.BackgroundOrder : classes.BackgroundOrderLight];
    let ClassesAdd = [classes.BackgroundAdd, theme ? classes.BackgroundAdd : classes.BackgroundAddLight];
    let [redirect, setRedirect] = useState(false);
    let [content, setContent] = useState(
        (localStorage.getItem("user") != "") ? 
        <div className={ClassesOrder.join(" ")} onClick={()=>{setWindowState("Open")}}><div className={classes.Order}>Order</div></div> :
        <div className={ClassesOrder.join(" ")} onClick={()=>{}}><div className={classes.Order}>Login</div></div> );

    useEffect(()=>{
        setContent( (localStorage.getItem("user") != "") ? 
        <div className={ClassesOrder.join(" ")} onClick={()=>{setWindowState("Open")}}><div className={classes.Order}>Order</div></div> :
        <div className={ClassesOrder.join(" ")} onClick={()=>{setRedirect(true)}}><div className={classes.Order}>Login</div></div> );
    },[theme, localStorage.getItem('user')]);



    if(redirect == true){
        return <Redirect to="auth"/>
    }
    else{

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
            {content}
        </div>

        </>
     );
            }
}
 
export default Price;