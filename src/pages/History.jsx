import React, { useState } from 'react'
import { Button } from 'primereact/button'
import Table from './Table'
import DataChart from './DataChart'

function History() {
  const [transaction, setTransaction] = useState([{ page: "History", btn: "" }]);

  const show = (event) => {
    console.log(event)
  }

  const showTable = (event) => {

  }

  return (
    <div>
      <h1>History</h1>



      <section
        style={{ marginTop: '25px', display: 'flex', justifyContent: 'flex-end' }}>
          <div >
        <Button
          label="Table"
          onClick={showTable}
          style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px', marginRight: '1rem' }} />
        <Button
          label="Chart"
          onClick={showTable}
          style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px' }} />
          </div>
      </section>




      <div className="row">
        <div className="col-md-4 form">
          <section
            style={{ float: 'left', marginLeft: '70px', display:'flex', flexDirection:'column' }}>
            <Button transaction={transaction} setTransaction={setTransaction}
              label="All in one"
              onClick={show}
              style={{ marginTop: '80px', backgroundColor: 'orange', marginBottom: '5px', maxwidth: '150px' }} />
            <Button transaction={transaction} setTransaction={setTransaction}
              label="Income"
              onClick={show}
              style={{ backgroundColor: 'orange', marginBottom: '5px', maxwidth: '10px' }} />
            <Button transaction={transaction} setTransaction={setTransaction}
              label="Expenditure"
              onClick={show}
              style={{ backgroundColor: 'orange', maxwidth: '150px' }} />
          </section>
        </div>

        <div className="col-md-8 form">
          <Table data={transaction} />
          {/* <DataChart data={transaction} /> */}
        </div>
      </div>
    </div>
  )
}

export default History