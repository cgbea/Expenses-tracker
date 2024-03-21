import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { getDateLocalStorage, getAmountPosTrans, getAmountNegTrans } from "../Lib/LocalStorageHelper";

export default function DataChart(props) {
  const { data } = props

  const nameBtn = data[0].nameBtn

  let incomeData = []
  let expenditureData = []
  let newDatasets = []
  let newlabelIncome = ''
  let newlabelExpenditure = ''

  if (nameBtn == "All") {
    incomeData = getAmountPosTrans()
    expenditureData = getAmountNegTrans()
    newlabelIncome = "Income"
    newlabelExpenditure = "Expenditure"

    newDatasets = [
      {
        label: newlabelIncome,
        backgroundColor: 'green',
        borderColor: 'green',
        data: incomeData
      },
      {
        label: newlabelExpenditure,
        backgroundColor: 'red',
        borderColor: 'red',
        data: expenditureData
      }
    ]
  }

  if (nameBtn == "Income") {
    newDatasets = [
      {
        label: nameBtn,
        backgroundColor: 'green',
        borderColor: 'green',
        data: getAmountPosTrans()
      },
    ]
  }

  if (nameBtn == "Expenditure") {
    newDatasets = [
      {
        label: nameBtn,
        backgroundColor: 'red',
        borderColor: 'red',
        data: getAmountNegTrans()
      }
    ]
  }

  const newData = {
    labels: getDateLocalStorage(),
    datasets: newDatasets
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          fontColor: 'blue'
        }
      }
    },
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
          color: 'orangered'
        },
        grid: {
          color: 'blue',
          drawBorder: false
        }
      }
    }
  };

  return (
    <div className="card">
      <Chart type="bar" data={newData} options={options} />
    </div>
  )
}