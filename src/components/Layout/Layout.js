import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import { Route, Switch } from 'react-router';
import Price from '../Price/Price';
import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import Controls from "../Controls/Controls";
import { useEffect, useState } from "react";
import Builder from "../Builder/Builder";
import DrawerMobile from "../Drawer/DrawerMobile";
import Modal from "../Modal/Modal";
import Auth from "../Auth/Auth";
import Checkout from "../Checkout/Checkout";

const Layout = ({store}) => {
    let [img, setImg] = useState('https://i.ibb.co/p3WXkTF/black.png');
    let [mouseData, setMouseData] = useState({})
    let [loaderStyle, setLoaderStyle] = useState({
        width: "100%",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "350px",
    });

    let [imgStyle, setImgStyle] = useState({
        position: 'absolute',
        marginBottom: '50px',
        width: '800px',
        height: '424px',
        filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 1))',
    });

    let [price, setPrice] = useState(0);
    let [DrawerState, setDrawerState] = useState(false);
    let [windowState, setWindowState] = useState("Hide");
   // let [orderObj, setOrderObj] = useState({});
    let [selected, setSelected] = useState({type:"", name:"", price:""});
    let [orderObj, setOrderObj] = useState([
        {type:"exterior",name:"Select exterior",price:0,},
        {type:"cpu",name:"Select cpu",price:0,},
        {type:"gpu",name:"Select gpu",price:0,},
        {type:"mainboard",name:"Select mainboard",price:0,},
        {type:"ram",name:"Select ram",price:0,},
        {type:"hdd",name:"Select hdd",price:0,},
        {type:"power",name:"Select power",price:0,},
        {type:"audio",name:"Select audio",price:0,},
    ]);

    let [theme, setTheme] = useState(localStorage.getItem('theme'));
    let [checkoutVisible,setCheckoutVisible] = useState(false);
    


     function onStartLoadingEvent(){
         setLoaderStyle({
             width: "100%",
             position: "absolute",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             bottom: "400px",
         });


         setImgStyle({
             display:"none",
         });

     }




    return (
    <div className={classes.Layout} onMouseMove={(arg)=>{ setMouseData(arg);}}>
        
        <LinesData mouseData={mouseData}/>
        <Nav setWindowState={setWindowState} windowState={windowState} setDrawerState={setDrawerState} state={DrawerState} theme={theme} settheme={setTheme} store={store}/>
        <Builder setOrderObj={setOrderObj} setTotalPrice={setPrice} orderObj={orderObj}/>
        <Drawer img={img} loaderStyle={loaderStyle} imgStyle={imgStyle} setImgStyle={setImgStyle} setLoaderStyle={setLoaderStyle}/>
        <DrawerMobile state={DrawerState} setDrawerState={setDrawerState}/>
        <Modal setCheckoutVisible={setCheckoutVisible} state={windowState} setWindowState={setWindowState} orderObj={orderObj} TotalPrice={price} theme={theme} store={store}/>
        <Checkout theme={theme} Visibility={checkoutVisible} setCheckoutVisible={setCheckoutVisible} orderOBJ={orderObj} totalPrice={price}/>
        <Price price={price} setWindowState={setWindowState}  selected={selected} setOrderObj={setOrderObj} orderObj={orderObj} theme={theme}/>
        
        <Controls setImg={setImg} onStartLoadingEvent={onStartLoadingEvent} setOrderObj={setOrderObj} setSelected={setSelected} theme={theme} settheme={setTheme}/>



    </div> );


}

export default Layout;