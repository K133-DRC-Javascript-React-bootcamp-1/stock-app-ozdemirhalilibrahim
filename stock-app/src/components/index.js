import {useState, useEffect} from 'react'
import List from './product/List'
import Form from './product/Form'
import './styles.css'


function Product() {
  const [products, setProduct] = useState([{
    id:0,
    productName: "First Product", 
    stock:5
    

},
{
    id:1,
    productName: "second Product", 
    stock:15
},
{
    id:2,
    productName: "third Product", 
    stock:83
},
{
    id:3,
    productName: "fourth Product", 
    stock:22
}


])  
  useEffect(()=>{
      console.log(products)
  },[products])
  return (
    <div id='container'>
        <Form addProduct={setProduct} products={products} />
        <List products={products} />
        
    </div>
  )
}

export default Product