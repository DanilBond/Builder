import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";
import Controls from "../Controls/Controls";


const Layout = ({mouseData}) => {
    
    return ( 
    <div className={classes.Layout}>
        <LinesData mouseData={mouseData}/>
        <Nav/>
        
        <Drawer/>
        <Controls/>
    </div> );
}
 
export default Layout;