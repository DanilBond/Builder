import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import Controls from "../Controls/Controls";
import { useState } from "react";


const Layout = ({mouseData}) => {
    let [img, setImg] = useState('https://lh3.google.com/u/0/d/1r2-Bhv77YpLLe893ebH_IZv6k5vonMht=w1920-h942-iv1');

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
        <Nav/>

        <Drawer img={img} loaderStyle={loaderStyle} imgStyle={imgStyle} setImgStyle={setImgStyle} setLoaderStyle={setLoaderStyle}/>
        <Controls setImg={setImg} onStartLoadingEvent={onStartLoadingEvent}/>
    </div> );
}

export default Layout;