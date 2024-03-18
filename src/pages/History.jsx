import React from 'react'
import {Button} from 'primereact/button'
import Table from './Table'
import DataChart from './DataChart'

function History() {

  return (
    <div>
      <h1>History</h1>
        <section 
          style={{float:'left', display:'grid', marginLeft:'70px'}}>
        <Button 
          label="All in one" 
          style={{marginTop:'120px', backgroundColor:'orange', marginBottom:'5px', width:'130px'}}/>
        <Button 
          label="Income" 
          style={{backgroundColor:'orange', marginBottom:'5px', width:'130px'}}/>
        <Button 
          label="Expenditure" 
          style={{backgroundColor:'orange'}}/>
        </section>
        <section 
          style={{marginTop:'25px',marginLeft:'625px'}}>
        <Button 
          label="Table" 
          style={{backgroundColor:'orange', marginBottom:'5px', width:'130px', marginRight:'1rem'}}/>
        <Button 
          label="Chart" 
          style={{backgroundColor:'orange', marginBottom:'5px', width:'130px'}}/>
        </section>
        <Table/>
        <DataChart/>
      </div>
  )
}

export default History