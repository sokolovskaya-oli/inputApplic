import React, {useContext} from "react";

import Context from "./Context";


function ProductItem({index,productName,price, size,height, width, leng, weight}){
   
    const {switchItem, flag, setFlag} = useContext(Context) 
    

    const cls = ['catalog_item']


  
 
    return(
        
        <li className={cls.join(' ')} >
        <input type="checkbox" checked={flag} id="delete-checkbox" onChange={()=>{setFlag(!flag)}} />
           <p>{index}</p>
           <p>{productName}</p>
           <p>{price} $</p>
           {switchItem === 'DVD' ? <p>Size: {size} MB</p> : ''}
           {switchItem === 'Furniture' ? <p>Dimension: {height}x{width}x{leng}</p> : ''}
            {switchItem === 'Book' ? <p>Weight: {weight} KG</p>: ''}
       </li>
    )
}
export default ProductItem