import React from 'react'
import 'primereact/resources/themes/mira/theme.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { getPositiveTransactions, getPositiveTotal, getNegativeTransactions, getNegativeTotal, getBalance } from "../Lib/LocalStorageHelper";


const IncomeTable = (props) => {
  const { data } = props

  const page = data[0].page
  const header = 'Recent Transactions'
  let footer = 'Total: '
  let value = []

  if (page == "Income") {
    console.log("Income")
    footer += getPositiveTotal()
    value = getPositiveTransactions()
  }

  if (page == "Expenditure") {
    value = getNegativeTransactions()
    footer += getNegativeTotal()
  }

  // if (page == "History") {
  //   console.log("History")
  //   footer += getBalance()
  // }

  return (
    <div>
      <DataTable
        value={value}
        header={header}
        footer={footer}
        scrollable scrollHeight="300px"
        //tableStyle={{ minWidth: '50px' }}
        style={{ marginTop: '20px' }}>
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