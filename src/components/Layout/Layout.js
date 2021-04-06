import Nav from "../Nav/Nav";
import classes from "./Layout.module.css";

import Drawer from "../Drawer/Drawer";
import LinesData from "../Lines/LinesData";


const Layout = ({mouseData}) => {
    
    return ( 
    <div className={classes.Layout}>
        <LinesData mouseData={mouseData}/>
        <Nav/>
        <Drawer mouseData={mouseData}/>
    </div> );
}
 
export default Layout;