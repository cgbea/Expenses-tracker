import React, {useState} from 'react'
import {Button} from 'primereact/button'
import 'primeicons/primeicons.css'

const Form = (props) => {

const {transaction, setTransaction} = props
const [inputData, setInputData] = useState({expense: "", price: ""})


//When save button is clicked input data is added to the table.
const saveInput = (event) => {
  event.preventDefault()
  setTransaction([...transaction, inputData])
}

//When clear button is clicked both input fields are cleared
const clearInput = () => {
    setInputData("")    
  }

const handleInputChange = (event) => {
    let name = event.target.name
    let newValue = event.target.value
    if(name === "expense"){
        setInputData({...inputData, expense: newValue})
    }else{
        setInputData({...inputData, price: newValue})
    }
}

  return (
    <div>
        <section style={{float:'left', display:'grid', marginLeft:'50px'}}>
    <input className="form-control form-control-lg" type="text" name='expense' onChange={handleInputChange} placeholder="Name of Transaction" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px', marginTop:'30px'}}/>
    <input className="form-control form-control-lg" type="number" name='price' onChange={handleInputChange} placeholder="Transaction Amount" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px'}}/>
<span className="p-buttonset" style={{float:'left'}}>
  <Button label="Save" onClick={saveInput} style={{backgroundColor:'lightGreen'}} icon="pi pi-check" />
  <Button label="Cancel" onClick={clearInput} style={{backgroundColor:'tomato'}} icon="pi pi-times" />
</span>
    </section>
    </div>
  )
}

export default Form