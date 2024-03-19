import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'
import { getBalance } from "../Lib/LocalStorageHelper";

function Expenditure() {
  const [transaction, setTransaction] = useState([{page: "Expenditure"}]);

  return (
    <div>
      <h1>Expenditure</h1>
      <h3>Balance: {getBalance()}</h3>
      <div className="row">
        <div className="col-md-4 form">
          <Form transaction={transaction} setTransaction={setTransaction} />
        </div>
        <div className="col-md-8 form">
          <Table data={transaction} />
        </div>
      </div>
    </div>
  )
}

export default Expenditure