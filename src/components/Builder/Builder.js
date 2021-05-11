import { useEffect, useState } from "react";

const Builder = ({setOrderObj, setTotalPrice, orderObj}) => {
    let [price, setPrice] = useState(0);
 
    useEffect(()=>{
        //setTotalPrice(1);
        setPrice(0);
        let temp = 0;
        Object.values(orderObj).map((i) => {temp = temp+=parseInt(i.price)});
        setTotalPrice(temp);
    },[orderObj])
    return ( 
        <div>
           
        </div>
     );
}
 
export default Builder;