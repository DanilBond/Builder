import classes from "./Checkout.module.css";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import LinesData from "../Lines/LinesData";
import CheckoutNav from "../Nav/CheckoutNav";
import axios from "axios";
import PushNot from "../PushNot/PushNot";

const Checkout = ({store,orderOBJ,totalPrice, Visibility,setCheckoutVisible}) => {
    let Classes = [classes.Visibility, Visibility ? classes.Visibility : classes.Invisibility];
    useEffect(()=>{
        console.log(Visibility);
    },[Visibility])

    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [phone, setPhone] = useState('');
    let [errorResult, setErrorResult] = useState(<></>);
    let [error, setError] = useState('');

    function Order(){
        if(name != '' && address != '' && phone != ''){
            axios
            .post("https://pcbuilder-989af-default-rtdb.firebaseio.com/orders/" + localStorage.getItem("user") + ".json", {
              name: name,
              address: address,
              phone: phone,
            })
            .then((response) => {
              if(response.status == 200){
                setError("Sucsess");
                setErrorResult(<PushNot message="Sucsess"/>);
                let timer = setTimeout(() => {
                    setError("");
                    setErrorResult(<></>);
                    console.log("tm");
                  }, 3000);
                 
              }
            });
        }
    }

    return ( 
        <div className={Classes.join(" ")}>
             
        <div className={classes.Checkout} >


            <div className={classes.CheckoutBack} >
            {errorResult}
        <div className={classes.CheckoutPar}>
            <h1>Total:43545$</h1>
            <form className={classes.Form} onSubmit={(e)=>{e.preventDefault();}}>

            <input 
            type="text"
            placeholder="Name" 
            name="name" 
            required 
            className={classes.Input} 
             onChange={(e)=>{setName(e.target.value)}}
            />

            <input 
            type="text" 
            placeholder="Address" 
            name="address" 
            required 
            minLength="3"  
            className={classes.Input}
            onChange={(e)=>{setAddress(e.target.value)}}
            />

            <input 
            type="text" 
            placeholder="Phone" 
            name="phone" 
            required 
            minLength="3"
            pattern="0[0-9]{9}"
            className={classes.Input}
            onChange={(e)=>{setPhone(e.target.value)}}
            />


            <div className={classes.ButtonParent}>
            <button className={classes.Button} onClick={()=>{Order();}}>Checkout</button>
            <button className={classes.ButtonCancel} onClick={()=>{
            if(Classes = classes.Visibility){
                setCheckoutVisible(false);
            }
            console.log(Classes);
        }}>Cancel</button>
            </div>

            

            </form>
        </div>
        
        </div>
        </div>
        </div>
     );
}
 
export default Checkout;