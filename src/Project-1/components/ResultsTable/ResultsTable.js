import React from 'react'

export default function ResultsTable(props) {
  return (
    <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData)=>{
            return(
            <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.savingsEndOfYear - yearData.yearlyContribution*yearData.year - props.initialInvestment }</td>
            <td>{props.initialInvestment + yearData.yearlyContribution*yearData.year }</td>
          </tr>)
          })}
        </tbody>
      </table>
  )
}
