import React, { useEffect, useState } from 'react'




const Lines = ({mouseData, stylesForLines}) => {
    let [x, setX] = useState(0);
    let [y, setY] = useState(0);
    let [style1, setStyle1] = useState({});
    let [style2, setStyle2] = useState({});
    

    useEffect(function(){
        setX(((window.innerWidth) - mouseData.pageX ));
        setY((window.innerHeight - mouseData.pageY ));
         setStyle1({
            
             transform: `translateX(${x/50}px) translateY(${y/50}px)`,
         })
         setStyle2({
            
             transform: `translateX(${x/100}px) translateY(${y/100}px)`,
         }
        )
    },[mouseData])
    
    return ( 
        <div>
            <div>
            <div style={style1}>
            <span style={stylesForLines.neonLine1}></span>
            <span style={stylesForLines.neonLine2}></span>
            <span style={stylesForLines.neonLine3}></span>
            <span style={stylesForLines.neonLine4}></span>
            <span style={stylesForLines.neonLine5}></span>
            <span style={stylesForLines.neonLine6}></span>
            </div>
            <div style={style2}>
            <span style={stylesForLines.neonLine7}></span>
            <span style={stylesForLines.neonLine8}></span>
            <span style={stylesForLines.neonLine9}></span>
            <span style={stylesForLines.neonLine10}></span>
            <span style={stylesForLines.neonLine11}></span>
            </div>
            </div>


            <div>
            <div style={style1}>
            <span style={stylesForLines.neonLine12}></span>
            
            <span style={stylesForLines.neonLine14}></span>
            <span style={stylesForLines.neonLine15}></span>
            <span style={stylesForLines.neonLine16}></span>
            <span style={stylesForLines.neonLine17}></span>
            <span style={stylesForLines.neonLine19}></span>
            </div>
            <div style={style2}>
            
            <span style={stylesForLines.neonLine13}></span>
            
            <span style={stylesForLines.neonLine22}></span>
            <span style={stylesForLines.neonLine20}></span>
            <span style={stylesForLines.neonLine21}></span>
            
            <span style={stylesForLines.neonLine18}></span>
            </div>
            </div>
      </div>
     );
}
 
export default Lines;