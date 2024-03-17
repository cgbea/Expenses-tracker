import React from 'react'
import {Button} from 'primereact/button'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'

function Expenditure() {
  return (
    <div>
      <h1>Expenditure</h1>
      <h3>Balance: </h3>
      <section style={{float:'left', display:'grid', marginLeft:'50px'}}>
      <input class="form-control form-control-lg" type="text" placeholder="Name of Transaction" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px', marginTop:'30px'}}/>
      <input class="form-control form-control-lg" type="text" placeholder="Transaction Amount" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px'}}/>
  <span className="p-buttonset" style={{float:'left'}}>
    <Button label="Save" style={{backgroundColor:'lightGreen'}} icon="pi pi-check" />
    <Button label="Cancel" style={{backgroundColor:'tomato'}} icon="pi pi-times" />
  </span>
      </section>
<section>
<DataTable showGridlines tableStyle={{ minWidth: '40rem'}} style={{marginTop:'20px', marginLeft:'30%'}}>
    <Column field="expense" header="Expense"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="ingoing" header="Outgoing"></Column>
</DataTable>
</section>
    </div>
  )
}

export default Expenditure