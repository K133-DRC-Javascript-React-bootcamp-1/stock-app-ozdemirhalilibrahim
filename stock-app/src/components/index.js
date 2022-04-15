import {useState, useEffect} from 'react'
import List from './product/List'
import Form from './product/Form'
// import './styles.css'


function Product() {
  const [products, setProduct] = useState([])  
  useEffect(()=>{
      console.log(products)
  },[products])
  return (
    <div id='container'>
        
        <List products={products} />
        <Form addProduct={setProduct} products={products} />
    </div>
  )
}

export default Product