import classes from "./Controls.module.css";
import systemBlock from "../../images/Icons/Systemblock.svg"
import gpuimg from "../../images/Icons/GPU.svg"
import cpuimg from "../../images/Icons/CPU.svg"
import mbimg from "../../images/Icons/MB.svg"
import memory from "../../images/Icons/Memory.svg"
import harddisk from "../../images/Icons/Harddisk.svg"
import powersupply from "../../images/Icons/Powerblock.svg"
import audiocard from "../../images/Icons/Audiocard.svg"
import Componentitem from "../Componentitem/Componentitem";
import { useEffect, useState } from "react";
import ComponentPart from "../Componentitem/ComponentPart";
import axios from "axios";
import Loading from "../Loading/Loading";
import ComponentCountable from "../Componentitem/ComponentCountable";



const Controls = ({setImg, onStartLoadingEvent, setOrderObj, setSelected, theme}) => {

    let Classes = [classes.Controls, theme ? classes.Controls : classes.ControlsLight];

    let [componentType, setComponentType] = useState("Select part");
    let [exterior, setExterior] = useState([]);
    let [cpu, setCpu] = useState([]);
    let [gpu, setGpu] = useState([]);
    let [mb, setMb] = useState([]);
    let [ram, setRam] = useState([]);
    let [hdd, setHdd] = useState([]);
    let [power, setPower] = useState([]);
    let [sound, setSound] = useState([]);
    let [result, setResult] = useState([]);
    

    useEffect(
        function(){
           if(componentType !== "Select part"){
           setResult(<Loading/>);
           }
           axios
          .get('https://pcbuilder-989af-default-rtdb.firebaseio.com/series.json')
          .then(response => {
            setExterior([]);
            setCpu([]);
            setGpu([]);
            setMb([]);
            setRam([]);
            setHdd([]);
            setPower([]);
            setSound([]);
            setResult([]);
            
            for (const i of Object.values(response.data.cyber.parts.exterior)) {
                setExterior((oldItems) => [...oldItems, <ComponentPart price={i.price + " ₽"} name={i.name} type="exterior" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.cpu)) {
                setCpu((oldItems) => [...oldItems, <ComponentPart price={i.price + " ₽"} name={i.name} type="cpu" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.gpu)) {
                setGpu((oldItems) => [...oldItems, <ComponentPart price={i.price + " ₽"} name={i.name} type="gpu" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.mb)) {
                setMb((oldItems) => [...oldItems, <ComponentPart price={i.price + " ₽"} name={i.name} type="mainboard" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.ram)) {
                setRam((oldItems) => [...oldItems, <ComponentCountable price={i.price + " ₽"} name={i.name} type="ram" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.hdd)) {
                setHdd((oldItems) => [...oldItems, <ComponentCountable price={i.price + " ₽"} name={i.name} type="hdd" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.power)) {
                setPower((oldItems) => [...oldItems, <ComponentPart price={i.price + " ₽"} name={i.name} type="power" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            for (const i of Object.values(response.data.cyber.parts.sound)) {
                setSound((oldItems) => [...oldItems, <ComponentPart price={i.price + " ₽"} name={i.name} type="audio" url={i.url} classes={classes} setUrl={setImg} onStartLoadingEvent={onStartLoadingEvent} setSelected={setSelected}/>]);
            }

            switch(componentType){
                case"Exterior":
                setResult(exterior);
                break;
                case"CPU":
                setResult(cpu);
                break;
                case"GPU":
                setResult(gpu);
                break;
                case"Main board":
                setResult(mb);
                break;
                case"RAM":
                setResult(ram);
                break;
                case"Harddisk":
                setResult(hdd);
                break;
                case"Powersupply":
                setResult(power);
                break;
                case"Audiocard":
                setResult(sound);
                break;

                default:
                    setResult(exterior);
                    break;

            }
            console.log(result);
          }
          )
          .catch((error) => {
              console.log(error);
          })
         
        },[componentType]);

    

    return (
        <div className={classes.ControlPanels}>
            <div className={Classes.join(" ")}>
                    
                <div onClick={()=>{setComponentType("Exterior");}}>
                    <Componentitem img={systemBlock} name="Exterior" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("CPU");}}>
                    <Componentitem img={cpuimg} name="CPU" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("GPU");}}>
                    <Componentitem img={gpuimg} name="GPU" classes={classes}/>
                </div>

                <div onClick={()=>{setComponentType("Main board");}}>
                    <Componentitem img={mbimg} name="Main board" classes={classes}/>
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

            

            <div className={Classes.join(" ")}>      
                <div className={classes.NameBack}>              
                    <div className={classes.Name}>{componentType}</div>
                </div>                
                    {result}                   
            </div>
            
        </div>
     );
}
 
export default Controls;