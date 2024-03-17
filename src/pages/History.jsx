import React from 'react'
import {Button} from 'primereact/button'
import Table from './Table'
import DataChart from './DataChart'

function History() {

  return (
    <div>
      <h1>History</h1>
      <section style={{float:'left', display:'grid', marginLeft:'70px'}}>
      <Button label="All in one" style={{marginTop:'120px', backgroundColor:'#646cff', marginBottom:'5px', width:'130px'}}/>
      <Button label="Income" style={{backgroundColor:'#646cff', marginBottom:'5px', width:'130px'}}/>
      <Button label="Expenditure" style={{backgroundColor:'#646cff'}}/>
      </section>
      <section style={{marginTop:'25px', marginRight:'60px'}}>
      <Button label="Table" style={{backgroundColor:'#646cff', marginBottom:'5px', width:'130px', marginRight:'1rem'}}/>
      <Button label="Chart" style={{backgroundColor:'#646cff', marginBottom:'5px', width:'130px'}}/>
      </section>
      <Table/>
      <DataChart/>
      </div>
  )
}

export default History