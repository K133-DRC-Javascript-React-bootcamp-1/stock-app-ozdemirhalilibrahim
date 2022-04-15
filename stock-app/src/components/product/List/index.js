import {useState}from 'react'

function List({products}) {
  const [filterText, setFilterText] = useState("")
  const filtered = products.filter((item)=>{
      return Object.keys(item).some((key)=>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
      )
  })
  console.log("filtered ", filtered)
  return (
    <div>
        <input placeholder='Filter Contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
        <ul className='list'>
            {filtered.map((contact, i)=>(
                <li key={i}> 
                <span>{contact.productName}</span>
                <span>{contact.stock}</span>
                
                </li>
                ))}
        </ul>
        <p>Total products ({filtered.length})</p>
        

    </div>
  )
}

export default List