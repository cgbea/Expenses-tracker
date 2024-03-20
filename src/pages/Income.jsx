import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import { getBalance } from "../Lib/LocalStorageHelper";

function Income() {
  const [transaction, setTransaction] = useState([{ page: "Income" }]);

  return (
    <div>
      <h1>Income</h1>
      
      <div className="row">
      
        <div className="col-md-4 form">
        <section style={{ padding: '16px', borderRadius: "16px", backgroundColor: "orange", width: '100%', display: 'flex', justifyContent: 'center' }}>

<div style={{ fontSize: '24px', color: 'white' }}>
  Balance: £{getBalance()}
</div>
</section>
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
