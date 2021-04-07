
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
import { useState } from "react";

const Controls = () => {
    let [componentType, setComponentType] = useState("default");

    return (
        <div className={classes.ControlPanels}>
            <div className={classes.Controls}>
                    
                <div onClick={()=>{setComponentType("systemBlock");}}>
                    <Componentitem img={systemBlock} name="Exterior" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("cpu");}}>
                    <Componentitem img={cpu} name="CPU" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("gpu");}}>
                    <Componentitem img={gpu} name="GPU" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("mb");}}>
                    <Componentitem img={mb} name="Main board" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("memory");}}>
                    <Componentitem img={memory} name="RAM" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("harddisk");}}>
                    <Componentitem img={harddisk} name="Harddisk" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("powersupply");}}>
                    <Componentitem img={powersupply} name="Powersupply" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("audiocard");}}>
                    <Componentitem img={audiocard} name="Audiocard" classes={classes}/>
                </div>
                
                
            </div>



            <div className={classes.Controls}>                    
                {componentType}
            </div>
        </div>
     );
}
 
export default Controls;