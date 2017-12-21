import React from 'react'
import { get as g } from 'lodash'

const LoanInfo = ({ data }) => (
  <div>
    <div>
      <span>Total Principal: </span>
      <span>{g(data, 'totalPrincipal')}</span>
    </div>
    <div>
      <span>Term: </span>
      <span>{g(data, 'term')}</span>
    </div>
    <div>
      <span>Total Cost of Credit: </span>
      <span>{g(data, 'totalCostOfCredit')}</span>
    </div>
    <div>
      <span>Total Repayable Amount: </span>
      <span>{g(data, 'totalRepayableAmount')}</span>
    </div>
    <div>
      <span>Monthly Payment: </span>
      <span>{g(data, 'monthlyPayment')}</span>
    </div>
  </div>
)

export default LoanInfo
