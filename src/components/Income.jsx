import React, { useState } from 'react'
import {Button} from 'primereact/button'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'
import { Paginator } from 'primereact/paginator'


function Income() {
const [transactionName, setTransactionName] = useState("")
const [amount, setAmount] = useState("")
const [data, setData] = useState({})

//When save button is clicked input data is added to the table.
const saveInput = (event) => {
event.preventDefault()
setData({transactionName, amount})
console.log(data.transactionName)
console.log(data.amount)

return (
  <div>
    <section>
<DataTable value={setData} showGridlines tableStyle={{ minWidth: '50rem'}} style={{marginLeft:'30%', marginTop:'20px'}}>
    <Column field="expense" header="Expense"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="ingoing" header="Ingoing"></Column>
</DataTable>
</section>
  </div>
)

}

//When clear button is clicked both input fields are cleared
const clearInput = () => {
setAmount("")
setTransactionName("")
}

  return (
    <div>
      <h1>Income</h1>
      <h3>Balance: </h3>


      <section style={{float:'left', display:'grid', marginLeft:'50px'}}>
      <input className="form-control form-control-lg" type="text" value={transactionName} onChange={(e) => setTransactionName(e.target.value)} placeholder="Name of Transaction" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px', marginTop:'30px'}}/>
      <input className="form-control form-control-lg" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Transaction Amount" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px'}}/>
  <span className="p-buttonset" style={{float:'left'}}>
    <Button label="Save" onClick={saveInput} style={{backgroundColor:'lightGreen'}} icon="pi pi-check" />
    <Button label="Cancel" onClick={clearInput} style={{backgroundColor:'tomato'}} icon="pi pi-times" />
  </span>
      </section>

      <section>
<DataTable showGridlines paginator rows={5} tableStyle={{ minWidth: '50rem'}} style={{marginLeft:'30%', marginTop:'20px'}}>
    <Column field="expense" header="Expense"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="ingoing" header="Ingoing"></Column>
</DataTable>
</section>
    </div>
  )
}

export default Income