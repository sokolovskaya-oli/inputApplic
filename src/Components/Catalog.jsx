import React,  {useContext} from "react";
import './../css/style.css';
import {NavLink } from "react-router-dom"
import ProductItem from "./ProductItem";
import Context from "./Context";

function Catalog(){
    const {products, setProducts} = useContext(Context) 

    function massDelete(){
        const sortProduct = products.filter(product => product.flag === false)
        setProducts([...sortProduct])
    }

    function checked (id){
        const selectProduct = products.find((item)=>item.sku === id )
        selectProduct.flag = !selectProduct.flag
        setProducts([...products])
    }
   
    return(
        <section>
        <div className="catalog-page_wrapper">
            <div className="catalog-page_header">
                <h1>Product List</h1>
                <div>
                    <button><NavLink to="/addproduct"> Add</NavLink></button>
                    <button id="delete-product-btn" onClick={()=>massDelete()}> Mass Detete</button>
                </div>    
            </div>    
            <div className="catalog_container">
                <ul className="catalog_items">
                   {products.map((products, index)=>{
                      
                      
                      return <ProductItem key={index}
                      id={products.sku}
                      checked={checked}
                      productName={products.productName}
                      price={products.price}
                      size={products.size}
                      height={products.height}
                      width={products.width}
                      leng={products.leng}
                      weight={products.weight}
                      flag={products.flag}
                      switchItem={products.switchItem}
                       />
                   })}
                             
                        
                 
                </ul>
            </div>
        </div>   
        </section> 
    )
}
export default Catalog