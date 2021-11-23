import React, {useContext} from "react";
import './../css/style.css';
import 'antd/dist/antd.css';
import { Input, Select} from 'antd';
import {useHistory, NavLink} from 'react-router-dom'
import Context from "./Context";

const { Option } = Select;




function Product(){
    const {products, setProducts, switchItem, flag, setswitchItem, productName,price, size,height, width, leng, weight, sku, setProductName, setSku, setPrice, setSize, setHeight, setWidth, setLeng, setWeight} = useContext(Context)
   
 
    const history = useHistory()  
    function backToHome(){
        history.goBack()
    }

    function handleSubmitForm (event){
       event.preventDefault()
        const data={ sku, productName,price, size,height, width, leng, weight, flag}
        setProducts([...products, data])
        backToHome()
    }

    function onChange (value)  {
        setswitchItem(value)
       }

  

    return(
        <section>
            <div className="product-page_wrapper">
                <div className="product-page_header">
                    <h1>Product Add</h1>
                    <div>
                       
                       <NavLink to="/">  <button> Cancel</button></NavLink>
                    </div>    
                </div> 
                <form onSubmit={handleSubmitForm} >   
                <div id="product_form">
                    <h3>SKU</h3>
                    <input type="text" 
                            id="sku"  
                            placeholder="Please, provide sku" 
                            name='sku' value={products.sku} 
                            onChange={event=>setSku(event.target.value)}
                         required
                          
                     
                     />

                    <h3>Name:</h3>
                    <input type="text" 
                            id="name"  
                            placeholder="Please, provide name"  
                            name='productName' 
                            value={products.productName}
                            onChange={event=>setProductName(event.target.value)}
                           required
                          
                    />
                
                    <h3>Price ($)</h3>
                    <input type="number" 
                            id="price"  
                            placeholder="Please, provide price" 
                            name='price' 
                            value={products.price} 
                            onChange={event=>setPrice(event.target.value)}
                            required
                            />
                           

                    <h3>Type Switcher</h3>
                    <div className="site-input-group-wrapper">
                     <Input.Group compact >
                        <Select defaultValue="Type Switcher" onChange={onChange}>
                        <Option value="DVD">DVD</Option>
                        <Option value="Furniture">Furniture</Option>
                        <Option value="Book">Book</Option>
                         </Select>
                      </Input.Group>
                     </div>
                     {switchItem === 'DVD' && 
                            <div id="dvd">
                                <h2>DVD:</h2>
                                <h3>Size (MB):</h3>
                                <input type="number" 
                                        placeholder="Please, provide size" 
                                        id="size" name='size' 
                                        value={products.size}  
                                     
                                        onChange={event=>setSize(event.target.value)}
                                        required
                                         />
                                   
                            </div>
                        }
                        {switchItem === 'Furniture' &&
                            <div id="furniture">
                            <h2>Furniture:</h2>
                            <h3>Height (cm):</h3>
                            <input type="number" 
                                    placeholder="Please, provide height" 
                                    id="height"  
                                    name='height' 
                                    value={products.height}  
                               
                                    onChange={event=>setHeight(event.target.value)} 
                                    required
                                    />
                              

                            <h3>Width (cm):</h3>
                            <input type="number" 
                                    placeholder="Please, provide width" 
                                    id="width" 
                                    name='width' 
                                    value={products.width}  
                                    required
                                    onChange={event=>setWidth(event.target.value)}
                                    />
                             

                            <h3>Length (cm):</h3>
                            <input type="number" 
                                    placeholder="Please, provide length" id="length" 
                                    name='leng' value={products.leng}  
                                   
                                    onChange={event=>setLeng(event.target.value)}/>
                                   
                        </div>
                        }
                        {switchItem === 'Book' &&
                        <div id="book">
                            <h2>Book:</h2>
                            <h3>Weight:</h3>
                            <input type="number" 
                                    placeholder="Please, provide weight" 
                                    id="weight" name='weight' 
                                    value={products.weight}  
                                    required
                                    onChange={event=>setWeight(event.target.value)} />
                           
                        </div>
                        }
                    </div>
                <button type="submit" onSubmit={handleSubmitForm}  >Save</button>
                
                </form>

            </div>
        </section>

    )
}
<input


/>
export default Product


