import React from 'react'
import {Button} from 'primereact/button'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/md-light-indigo/theme.css'


function Income() {
  return (
    <div>
      <h1>Income</h1>
      <h2>Balance: </h2>
      <section style={{float:'left', display:'grid', marginLeft:'50px'}}>
      <input class="form-control form-control-lg" type="text" placeholder="Name of Transaction" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px', marginTop:'30px'}}/>
      <input class="form-control form-control-lg" type="text" placeholder="Transaction Amount" aria-label=".form-control-lg example" style={{padding:'15px', marginBottom:'10px'}}/>
  <span className="p-buttonset" style={{float:'left'}}>
    <Button label="Save" style={{backgroundColor:'lightGreen'}} icon="pi pi-check" />
    <Button label="Cancel" style={{backgroundColor:'tomato'}} icon="pi pi-times" />
  </span>
      </section>
<section>
<DataTable showGridlines tableStyle={{ minWidth: '50rem'}} style={{marginLeft:'30%', marginTop:'20px'}}>
    <Column field="expense" header="Expense"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="ingoing" header="Ingoing"></Column>
</DataTable>
</section>
    </div>
  )
}

export default Income