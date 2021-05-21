import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import Controls from "../Controls/Controls";
import { useEffect, useState } from "react";
import Price from "../Price/Price";
import Modal from "../Modal/Modal";
import Builder from "../Builder/Builder";
import DrawerMobile from "../Drawer/DrawerMobile";
import i7 from "../../images/Images/Cyber/CPU/i7.png"
import i9 from "../../images/Images/Cyber/CPU/i9.png"
import bl from "../../images/Images/Cyber/Exterior/black.png"
import yelb from "../../images/Images/Cyber/Exterior/blackyellow.png"
import blre from "../../images/Images/Cyber/Exterior/bluered.png"
import grr from "../../images/Images/Cyber/Exterior/green.png"
import orr from "../../images/Images/Cyber/Exterior/orange.png"
import pi from "../../images/Images/Cyber/Exterior/pink.png"
import publ from "../../images/Images/Cyber/Exterior/purpleblue.png"
import rebl from "../../images/Images/Cyber/Exterior/redblack.png"
import wh from "../../images/Images/Cyber/Exterior/white.png"
import g1660 from "../../images/Images/Cyber/GPU/1660ti.png"
import g2060 from "../../images/Images/Cyber/GPU/2060.png"
import g2070 from "../../images/Images/Cyber/GPU/2070.png"
import g2080 from "../../images/Images/Cyber/GPU/2080ti.png"
import g3070 from "../../images/Images/Cyber/GPU/3070.png"
import g5500 from "../../images/Images/Cyber/GPU/5500.png"
import g690 from "../../images/Images/Cyber/GPU/6900.png"
import ex from "../../images/Images/Cyber/HDD/exos.png"
import sea from "../../images/Images/Cyber/HDD/seagete.png"
import skyh from "../../images/Images/Cyber/HDD/skyhawk.png"
import z490 from "../../images/Images/Cyber/Mb/z490imsi.png"
import z590 from "../../images/Images/Cyber/Mb/z590.png"
import beq from "../../images/Images/Cyber/Power/bequiet.png"
import co1 from "../../images/Images/Cyber/Power/coolermaster.png"
import co2 from "../../images/Images/Cyber/Power/coolermaster2.png"
import cor from "../../images/Images/Cyber/Ram/corsair-RGB.png"
import hyrgb from "../../images/Images/Cyber/Ram/hyperx-RGB.png"
import hyx from "../../images/Images/Cyber/Ram/hyperx.png"
import b1 from "../../images/Images/Cyber/Sound/b1.png"
import b2 from "../../images/Images/Cyber/Sound/b2.png"


const Layout = ({mouseData}) => {
    let [img, setImg] = useState('https://i.ibb.co/p3WXkTF/black.png');

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
    <div className={classes.Layout}>
        
        <LinesData mouseData={mouseData}/>
        <Nav setWindowState={setWindowState} windowState={windowState} setDrawerState={setDrawerState} state={DrawerState}/>
        <Builder setOrderObj={setOrderObj} setTotalPrice={setPrice} orderObj={orderObj}/>
        <Drawer img={img} loaderStyle={loaderStyle} imgStyle={imgStyle} setImgStyle={setImgStyle} setLoaderStyle={setLoaderStyle}/>
        <DrawerMobile state={DrawerState} setDrawerState={setDrawerState}/>
        <Modal state={windowState} setWindowState={setWindowState} orderObj={orderObj} TotalPrice={price}/>
        <Price price={price} setWindowState={setWindowState}  selected={selected} setOrderObj={setOrderObj} orderObj={orderObj}/>
        
        <Controls setImg={setImg} onStartLoadingEvent={onStartLoadingEvent} setOrderObj={setOrderObj} setSelected={setSelected}/>
        <img src={i7} alt=""/>
        <img src={i9} alt=""/>
        <img src={bl} alt=""/>
        <img src={yelb} alt=""/>
        <img src={blre} alt=""/>
        <img src={grr} alt=""/>
        <img src={orr} alt=""/>
        <img src={pi} alt=""/>
        <img src={publ} alt=""/>
        <img src={rebl} alt=""/>
        <img src={wh} alt=""/>
        <img src={g1660} alt=""/>
        <img src={g2060} alt=""/>
        <img src={g2070} alt=""/>
        <img src={g2080} alt=""/>
        <img src={g3070} alt=""/>
        <img src={g5500} alt=""/>
        <img src={g690} alt=""/>
        <img src={ex} alt=""/>
        <img src={sea} alt=""/>
        <img src={skyh} alt=""/>
        <img src={z490} alt=""/>
        <img src={z590} alt=""/>
        <img src={beq} alt=""/>
        <img src={co1} alt=""/>
        <img src={co2} alt=""/>
        <img src={cor} alt=""/>
        <img src={hyrgb} alt=""/>
        <img src={hyx} alt=""/>
        <img src={b1} alt=""/>
        <img src={b2} alt=""/>
    </div> );
}

export default Layout;