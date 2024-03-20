import React, { useState } from 'react'
import { Button } from 'primereact/button'
import Table from './Table'
import DataChart from './DataChart'

function History() {
  const [transaction, setTransaction] = useState([{ page: "History" }]);

  const show = (event) => {
  }

  const showTable = (event) => {

  }

  return (
    <div>
      <h1>History</h1>
      <section
        style={{ float: 'left', display: 'grid', marginLeft: '70px' }}>
        <Button transaction={transaction} setTransaction={setTransaction}
          label="All in one"
          onClick={show}
          style={{ marginTop: '120px', backgroundColor: 'orange', marginBottom: '5px', width: '130px' }} />
        <Button transaction={transaction} setTransaction={setTransaction}
          label="Income"
          onClick={show}
          style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px' }} />
        <Button transaction={transaction} setTransaction={setTransaction}
          label="Expenditure"
          onClick={show}
          style={{ backgroundColor: 'orange' }} />
      </section>
      <section
        style={{ marginTop: '25px', marginLeft: '625px' }}>
        <Button
          label="Table"
          onClick={showTable}
          style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px', marginRight: '1rem' }} />
        <Button
          label="Chart"
          onClick={showTable}
          style={{ backgroundColor: 'orange', marginBottom: '5px', width: '130px' }} />
      </section>
      <Table data={transaction} />
      <DataChart data={transaction} />
    </div>
  )
}

export default History