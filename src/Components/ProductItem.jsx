import React from "react";




function ProductItem({id,productName,price, size,height, width, leng, weight, switchItem, flag, checked}){
   
    
    

    const cls = ['catalog_item']


  
 
    return(
        
        <li className={cls.join(' ')} >
        <input type="checkbox" checked={flag} id="delete-checkbox" onChange={()=>{checked(id)}} />
           <p>{id}</p>
           <p>{productName}</p>
           <p>{price} $</p>
           {switchItem === 'DVD' && <p>Size: {size} MB</p>}
           {switchItem === 'Furniture' && <p>Dimension: {height} x {width} x {leng}</p>}
            {switchItem === 'Book' && <p>Weight: {weight} KG</p>}
       </li>
    )
}
export default ProductItem