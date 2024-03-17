import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function Income() {
const [transaction, setTransaction] = useState([])

  return (
    <div>
      <h1>Income</h1>
      <h3>Balance: </h3>
      <Form transaction={transaction} setTransaction={setTransaction}/>
      <Table data={transaction}/>
    </div>
  )
}

export default Income