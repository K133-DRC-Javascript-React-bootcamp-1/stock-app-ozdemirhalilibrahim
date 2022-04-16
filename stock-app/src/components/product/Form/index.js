import {useState, useEffect} from 'react'



function Form({ addProduct, products }) {
    const initialFormValue ={id:products.length, productName: "", stock:''}
    const [form, setForm] = useState(initialFormValue)
    const onChangeInput = (e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    useEffect(()=>{
        setForm(initialFormValue)
    },[products])
    const onSubmit= (e)=>{
        
        e.preventDefault()

        if(form.productName === '' || form.stock === '') {
            return false;
        }
        addProduct([...products, form])
        console.log(form)
        
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name='productName' 
        placeholder='Product Name' 
        onChange={onChangeInput}
        value={form.productName}
        />
        </div>
        <div>
            <input name='stock' 
            placeholder='stock' 
            onChange={onChangeInput} 
            value={form.stock}
            />
        </div>
        <div className='btn'>
            <button  >Add</button>
        </div>
        
    </form>
  )
}

export default Form