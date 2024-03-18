import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function Income() {
  const [transaction, setTransaction] = useState([]);

  return (
    <div>
      <h1>Income</h1>
      <h3>Balance: </h3>
      <div className="row">
        <div className="col-md-4 form">
          <Form transaction={transaction} setTransaction={setTransaction} />
        </div>
        <div className="col-md-8 form">
          <Table data={transaction} />
        </div>
      </div>
    </div>
  );
}

export default Income;
