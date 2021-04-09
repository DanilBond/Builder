import Loading from "../Loading/Loading";
import classes from "./Drawer.module.css";


const Drawer = ({img, imgStyle, loaderStyle, setImgStyle, setLoaderStyle}) => {
    

    function onLoadedEvent(){
        setLoaderStyle({
            display:"none",
        });
        setImgStyle({
            position: 'absolute',
            marginBottom: '50px',
            width: '800px',
            height: '424px',
            filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 1))',
            
        });
    }

    return ( 
        <div className={classes.Drawer}>
            
            
            <span>
                <img src={img} alt="" style={imgStyle} onLoad={onLoadedEvent} className={classes.Anim}/>
        </span>
        <div style={loaderStyle}><Loading/></div>
        </div>
     );
}

export default Drawer;