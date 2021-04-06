import classes from "./Drawer.module.css";
import img from "../../images/yellowblack.png"
import { useEffect, useState } from "react";

const Drawer = ({mouseData}) => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    let [style, setStyle] = useState({
        position: 'absolute',
        marginBottom: '50px',
        width: '800px',
        height: '424px',
        filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 1))',
    });

    useEffect(function(){
        setX(((window.innerWidth) - mouseData.pageX ));
        setY(((window.innerWidth) - mouseData.pageY ));
         setStyle({
                position: 'absolute',
                marginИottom: '50px',
                width: '800px',
                height: '424px',
                filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 1))',
                // transform: `rotateY(${y}deg) `,
            });
    },[mouseData])
    return ( 
        <div className={classes.Drawer}>
            <span><img src={img} alt="" style={style}/></span>
        </div>
     );
}
 
export default Drawer;