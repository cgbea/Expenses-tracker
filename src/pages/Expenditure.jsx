import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function Expenditure() {
  const [transaction, setTransaction] = useState([])

  return (
    <div>
      <h1>Expenditure</h1>
      <h3>Balance: </h3>
      <Form transaction={transaction} setTransaction={setTransaction}/>
      <Table data={transaction}/>
    </div>
  )
}

export default Expenditure