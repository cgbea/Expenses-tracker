import React from 'react'
import 'primereact/resources/themes/mira/theme.css'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'


const IncomeTable = (props) => {
    const {data} = props
    console.log({data})
    const header = 'Recent Transactions'
    const footer = 'Total:'

  return (
    <div>   
        <DataTable 
            value={data} 
            header={header} 
            footer={footer} 
            scrollable scrollHeight="300px" 
            tableStyle={{ minWidth: '50rem'}} 
            style={{marginTop:'20px'}}>
          <Column 
            field="expense" 
            header="Expense">
          </Column>
          <Column 
            field="date" 
            header="Date">
          </Column>
          <Column 
            field="price" 
            header="Price(£)">
          </Column>
        </DataTable>
    </div>
)
}

export default IncomeTable