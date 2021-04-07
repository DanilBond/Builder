import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import ControlLeft from "../Controls/ControlLeft";
import ControlRight from "../Controls/ControlRight";


const Layout = ({mouseData}) => {
    
    return ( 
    <div className={classes.Layout}>
        <LinesData mouseData={mouseData}/>
        <Nav/>
        
        <Drawer/>
        <ControlLeft/>
        <ControlRight/>
    </div> );
}
 
export default Layout;