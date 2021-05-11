import { useEffect, useState } from "react";

const Builder = ({setOrderObj, setTotalPrice, orderObj}) => {
    let [price, setPrice] = useState(0);
 
    useEffect(()=>{
        Object.values(orderObj).map((i) => {setPrice(price+=i.price);});
        setTotalPrice(price);
    },[orderObj])
    return ( 
        <div>
           
        </div>
     );
}
 
export default Builder;