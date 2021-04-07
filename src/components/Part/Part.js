import classes from "./Part.module.css";
import systemBlock from "../../images/Icons/Systemblock.svg"
import gpu from "../../images/Icons/GPU.svg"
import cpu from "../../images/Icons/CPU.svg"
import mb from "../../images/Icons/MB.svg"
import memory from "../../images/Icons/Memory.svg"
import harddisk from "../../images/Icons/Harddisk.svg"
import powersupply from "../../images/Icons/Powerblock.svg"
import audiocard from "../../images/Icons/Audiocard.svg"
import Componentitem from "../Lines/Componentitem/Componentitem";

const Part = () => {
    return ( 
        <div>
            <div onClick={()=>{alert("exterior");}}>
                <Componentitem img={systemBlock} name="Exterior" classes={classes}/>
            </div>

            <div onClick={()=>{alert("cpu");}}>
                <Componentitem img={cpu} name="CPU" classes={classes}/>
            </div>

            <div onClick={()=>{alert("gpu");}}>
                <Componentitem img={gpu} name="GPU" classes={classes}/>
            </div>

            <div onClick={()=>{alert("mb");}}>
                <Componentitem img={mb} name="Mother board" classes={classes}/>
            </div>

            <div onClick={()=>{alert("mem");}}>
                <Componentitem img={memory} name="RAM" classes={classes}/>
            </div>

            <div onClick={()=>{alert("hd");}}>
                <Componentitem img={harddisk} name="Harddisk" classes={classes}/>
            </div>

            <div onClick={()=>{alert("ps");}}>
                <Componentitem img={powersupply} name="Powersupply" classes={classes}/>
            </div>

            <div onClick={()=>{alert("aud");}}>
                <Componentitem img={audiocard} name="Audiocard" classes={classes}/>
            </div>
        </div>
     );
}
 
export default Part;