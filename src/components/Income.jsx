import React from 'react'
import {Button} from 'primereact/button'
import {InputText} from 'primereact/inputtext'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import 'primeicons/primeicons.css'

function Income() {
  return (
    <div>
      <h1>Income</h1>
      <h2>Balance: </h2>
      <section style={{float:'left', display:'grid', marginLeft:'50px'}}>
      <InputText keyfilter="int" placeholder="Name of transaction" style={{padding:'15px', marginBottom:'10px', marginTop:'30px'}} />
      <InputText keyfilter="int" placeholder="Transaction amount" style={{padding:'15px', marginBottom:'10px'}}/>
  <span className="p-buttonset" style={{float:'left'}}>
    <Button label="Save" icon="pi pi-check" />
    <Button label="Cancel" icon="pi pi-times" />
  </span>
      </section>
<section>
<DataTable showGridlines tableStyle={{ minWidth: '50rem'}} style={{float:'right', marginTop:'20px'}}>
    <Column field="expense" header="Expense"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="ingoing" header="Ingoing"></Column>
</DataTable>
</section>
    </div>
  )
}

export default Income