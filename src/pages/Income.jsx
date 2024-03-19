<<<<<<< HEAD
import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import { getBalance } from "../Lib/LocalStorageHelper";

function Income() {
  const [transaction, setTransaction] = useState([{ page: "Income" }]);
=======
import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'

function Income() {
const [transaction, setTransaction] = useState([])
>>>>>>> 04801db (moved formed,table and root to pages)

  return (
    <div>
      <h1>Income</h1>
<<<<<<< HEAD
      <h3>Balance: {getBalance()}</h3>
      <div className="row">
        <div className="col-md-4 form">
          <Form transaction={transaction} setTransaction={setTransaction} />
        </div>
        <div className="col-md-8 form">
          <Table data={transaction} />
        </div>
      </div>
=======
      <h3>Balance: </h3>
      <Form transaction={transaction} setTransaction={setTransaction}/>
      <Table data={transaction}/>
>>>>>>> 04801db (moved formed,table and root to pages)
    </div>
  );
}

export default Income;