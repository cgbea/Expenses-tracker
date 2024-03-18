import React, { useEffect } from 'react'
import  { useState } from 'react'
import 'primereact/resources/themes/mira/theme.css'
import { Chart } from 'primereact/chart';

const DataChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
const data = {
  labels: [],
  incomeData:[{
    label: 'Ingoing',
    backgroundColor: 'green',
    data:''
  }],
  expenditureData:[{
    label: 'Outgoing',
    backgroundColor: 'tomato',
    data: ''
  }],
}

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      scales: {
          x: {
              ticks: {
                  color: 'blue',
                  font: {
                      weight: 500
                  }
              },
              grid: {
                  display: false,
                  drawBorder: false
              }
          },
          y: {
              ticks: {
                  color: 'blue'
              },
              grid: {
                  color: 'black',
                  drawBorder: false
              }
          }
      }
  };
    setChartData(data)
    setChartOptions(options)
  }, [])

  return (
    <div>
      <h1></h1>
      <Chart type="bar" data={chartData} options={chartOptions}/>
    </div>
  )
}

export default DataChart