import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import Controls from "../Controls/Controls";
import { useEffect, useState } from "react";
import Price from "../Price/Price";
import Modal from "../Modal/Modal";


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
    let [windowState, setWindowState] = useState("Builder");


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
        <Nav setWindowState={setWindowState}/>
        
        <Drawer img={img} loaderStyle={loaderStyle} imgStyle={imgStyle} setImgStyle={setImgStyle} setLoaderStyle={setLoaderStyle}/>
        <Modal state={windowState}/>
        <Price price={price}/>
        
        <Controls setImg={setImg} onStartLoadingEvent={onStartLoadingEvent}/>
        
    </div> );
}

export default Layout;