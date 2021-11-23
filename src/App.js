
import './index.css';
import Product from './Components/Product';
import Catalog from './Components/Catalog';
import Context from './Components/Context';
import { useState, useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [switchItem, setswitchItem]=useState('')
  const [sku, setSku]=useState('')
  const[productName, setProductName]=useState('')
  const [price, setPrice]=useState('')
  const [size, setSize]=useState('')
  const [height, setHeight]=useState('')
  const [width, setWidth]=useState('')
  const [leng, setLeng]=useState('')
  const [weight, setWeight]=useState('')
  const [flag, setFlag] = useState(false);

  const [products, setProducts] = useState([
      {id:'new Date().getTime()', sku:'123', productName:'DVD-music', price: '15',  size:'10', flag: false}])


  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(products))},[products]
  )
 
  
  return (
    <BrowserRouter>
    <Context.Provider value={{products, setProducts, switchItem, setswitchItem, sku, setSku, productName, setProductName, price, setPrice, size, setSize, height, setHeight, width, setWidth, leng, setLeng, weight, setWeight, flag, setFlag}}>
      <div className="App">
      
        <Switch>
        <Route path='/' exact component={Catalog}/>
        <Route path="/addproduct" component={Product}/>
        </Switch>
      
      </div>
    </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
