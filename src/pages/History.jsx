import React, { useState } from 'react'
import { Button } from 'primereact/button'
import Table from './Table'
import DataChart from './DataChart'

function History() {
  const [transaction, setTransaction] = useState([{ page: "History", nameBtn: "All" }]);
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <h1>History</h1>

      <section
        style={{ marginTop: '25px', display: 'flex', justifyContent: 'flex-end' }}>
        <div >
          <Button
            label="Table"
            onClick={() => setHidden(true)}
            style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px', marginRight: '1rem' }} />
          <Button
            label="Chart"
            onClick={() => setHidden(false)}
            style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px' }} />
        </div>
      </section>

      <div className="row">
        <div className="col-md-4 form">
          <section
            style={{ float: 'left', marginLeft: '70px', display: 'flex', flexDirection: 'column' }}>
            <Button
              label="All in one"
              onClick={() => setTransaction([{ page: "History", nameBtn: "All" }])}
              style={{ marginTop: '80px', backgroundColor: 'orange', marginBottom: '5px', maxwidth: '150px' }} />
            <Button
              label="Income"
              onClick={() => setTransaction([{ page: "History", nameBtn: "Income" }])}
              style={{ backgroundColor: 'green', marginBottom: '5px', maxwidth: '10px' }} />
            <Button
              label="Expenditure"
              onClick={() => setTransaction([{ page: "History", nameBtn: "Expenditure" }])}
              style={{ backgroundColor: 'red', maxwidth: '150px' }} />
          </section>
        </div>
        <div className="col-md-8 form">
          {hidden ? <Table data={transaction} /> : <DataChart data={transaction} />}
        </div>
      </div>
    </div>
  )
}

export default History