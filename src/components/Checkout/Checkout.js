import classes from "./Checkout.module.css";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";
import LinesData from "../Lines/LinesData";
import CheckoutNav from "../Nav/CheckoutNav";

const Checkout = ({store,orderOBJ,totalPrice, Visibility,setCheckoutVisible}) => {
    let Classes = [classes.Visibility, Visibility ? classes.Visibility : classes.Invisibility];
    useEffect(()=>{
        console.log(Visibility);
    },[Visibility])

    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [phone, setPhone] = useState('');

    

    return ( 
        <div className={Classes.join(" ")}>
        <div className={classes.Checkout} >


            <div className={classes.CheckoutBack} >
        <div className={classes.CheckoutPar}>
            <h1>Total:43545$</h1>
            <form className={classes.Form}>

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
            <button className={classes.Button}>Checkout</button>
            <button className={classes.ButtonCancel}onClick={()=>{
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