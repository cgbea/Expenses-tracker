import React from 'react'
import 'primereact/resources/themes/mira/theme.css'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { getPositiveTransactions, getPositiveTotal, getNegativeTransactions, getNegativeTotal, readLocalStorage, getBalance } from "../Lib/LocalStorageHelper";

const IncomeTable = (props) => {
  const { data } = props

  const page = data[0].page
  const nameBtn = data[0].nameBtn
  const header = 'Recent Transactions'
  let footer = 'Total: '
  let value = []

//Get data from local storage  
  function showValue(page, nameBtn) {
    if (page == "Home" || nameBtn == "All") {
      value = readLocalStorage()
      footer += getBalance()
    }

    if (page == "Income" || nameBtn == "Income") {
      value = getPositiveTransactions()
      footer += getPositiveTotal()
    }

    if (page == "Expenditure" || nameBtn == "Expenditure") {
      value = getNegativeTransactions()
      footer += getNegativeTotal()
    }
  }

  showValue(page, nameBtn)


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