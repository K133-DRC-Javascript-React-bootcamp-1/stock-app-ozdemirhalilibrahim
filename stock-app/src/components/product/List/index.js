import {useState,useEffect}from 'react'

function List({products}) {
  const [filterText, setFilterText] = useState("")
  const [stock, setNewStock]= useState(1)
  
  useEffect(()=>
  
  console.log('degisiklik oldu'),[products.stock])
 
 const changeStock=(index, type)=> {
     if(type){
        products[index].stock=(parseInt(products[index].stock)+parseInt(stock))
     }
     else{
        products[index].stock=parseInt(products[index].stock)-parseInt(stock)
     }
     
 }


  const filtered = products.filter((item)=>{
      return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
      )
  })
  console.log("filtered ", filtered)
  console.log('indexle',filtered[0])
  return (
    <div>
        <input placeholder='Filter Product' value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
        <ul className='list'>
            {filtered.map((product, i)=>(
                <li key={i}> 
                <span>{product.productName} ({product.stock}) </span> 
                <form className='btn'> <input  value={stock}  onChange={(e)=>setNewStock(e.target.value)} style={{width:50}} /> <button onClick={changeStock(i,true)}  >Ekle</button> <button onClick={changeStock(i,false)}>Cikar</button> </form>
                
                </li>
                
                ))}
        </ul>
        <p>Total products ({filtered.length})</p>
        

    </div>
  )
}

export default List