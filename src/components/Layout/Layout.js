import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import Controls from "../Controls/Controls";
import { useState } from "react";


const Layout = ({mouseData}) => {
    let [img, setImg] = useState('https://lh3.google.com/u/0/d/1r2-Bhv77YpLLe893ebH_IZv6k5vonMht=w1920-h942-iv1');
    return ( 
    <div className={classes.Layout}>
        <LinesData mouseData={mouseData}/>
        <Nav/>
        
        <Drawer img={img}/>
        <Controls setImg={setImg}/>
    </div> );
}
 
export default Layout;