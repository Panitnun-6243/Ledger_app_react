import React, { useContext } from 'react'
import DataContext from '../data/DataContext'

function ReportComponent() {
  const balance = useContext(DataContext)
  return (
    <div className='balance-container'>
        <div><span>Income</span> : <span className='balance-income'>{balance.income}</span></div>
        <div><span>Expense</span> : <span className='balance-expense'>{balance.expense}</span></div>
    </div>
  )
}

export default ReportComponent