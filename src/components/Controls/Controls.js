
import classes from "./Controls.module.css";

import systemBlock from "../../images/Icons/Systemblock.svg"
import gpu from "../../images/Icons/GPU.svg"
import cpu from "../../images/Icons/CPU.svg"
import mb from "../../images/Icons/MB.svg"
import memory from "../../images/Icons/Memory.svg"
import harddisk from "../../images/Icons/Harddisk.svg"
import powersupply from "../../images/Icons/Powerblock.svg"
import audiocard from "../../images/Icons/Audiocard.svg"
import Componentitem from "../Componentitem/Componentitem";
import PartEditor from "../PartEditor/PartEditor";
import { useEffect, useState } from "react";
import ComponentPart from "../Componentitem/ComponentPart";
import axios from "axios";


const Controls = () => {
    let [isGettingData, getData] = useState(false)
    let [componentType, setComponentType] = useState("Exterior");
    let [exteriorData, setExteriorData] = useState([]);
    let [exterior, setExterior] = useState([]);

    useEffect(
        () => axios
          .get('https://pcbuilder-989af-default-rtdb.firebaseio.com/series.json')
          .then(response => {
            setExteriorData(Object.values(response.data.cyber.parts.exterior));
            for (const i of exteriorData) {
                //exterior.push(i)
                setExterior((oldItems) => [...oldItems, <ComponentPart price={i.price} name={i.name} classes={classes}/>]);
            }
            isGettingData = false;
          }),[isGettingData]);

    return (
        <div className={classes.ControlPanels}>
            <div className={classes.Controls}>
                    
                <div onClick={()=>{setComponentType("Exterior"); getData(true);}}>
                    <Componentitem img={systemBlock} name="Exterior" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("CPU");}}>
                    <Componentitem img={cpu} name="CPU" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("GPU");}}>
                    <Componentitem img={gpu} name="GPU" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("Main board");}}>
                    <Componentitem img={mb} name="Main board" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("RAM");}}>
                    <Componentitem img={memory} name="RAM" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("Harddisk");}}>
                    <Componentitem img={harddisk} name="Harddisk" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("Powersupply");}}>
                    <Componentitem img={powersupply} name="Powersupply" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("Audiocard");}}>
                    <Componentitem img={audiocard} name="Audiocard" classes={classes}/>
                </div>
                
                
            </div>



            <div className={classes.Controls}>      
                <div className={classes.NameBack}>              
                    <div className={classes.Name}>{componentType}</div>
                </div>

                <div onClick={()=>{}}>
                    {exterior}
                </div>
            </div>
        </div>
     );
}
 
export default Controls;

// const result = [];
//   for (const ingredient in ingredients) {
//     for (let i = 0; i < ingredients[ingredient]; i++) {
//       result.push(<PizzaIngredient key={ingredient + i} type={ingredient} />)
//     }
//   }

//<ComponentPart price="1000 ₽" name="Red black" classes={classes}/>