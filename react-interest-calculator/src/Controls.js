import React, { useState } from 'react';

function Controls({ onDeposit, onWithdraw, onAddInterest, onChargeFees }) {
    // State hooks to manage user input values
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  return (
    <>
      <div className="row justify-content-center">
        {/* Deposit Box : Allows the user to enter an amount and click "Deposit" to add money to their balance.*/}
        <div className="col-md-3 mb-4">
          <div className="card cube p-4">
            <h5>Deposit Money <i className="bi bi-arrow-down-circle-fill text-primary"></i></h5>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter amount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
            />
            <button className="btn btn-primary w-100" onClick={() => onDeposit(depositAmount)}>
              Deposit
            </button>
          </div>
        </div>

        {/* Withdraw Box: Allows the user to enter an interest rate and click "Add Interest" to add interest to their balance. */}
        <div className="col-md-3 mb-4">
          <div className="card cube p-4">
            <h5>Withdraw Money <i className="bi bi-arrow-up-circle-fill text-danger"></i></h5>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
            />
            <button className="btn btn-danger w-100" onClick={() => onWithdraw(withdrawAmount)}>
              Withdraw
            </button>
          </div>
        </div>

        {/* Interest Box:  Allows the user to click "Charge Fees" to apply fees to their balance.  */}
        <div className="col-md-3 mb-4">
          <div className="card cube p-4">
            <h5>Add Interest <i className="bi bi-percent text-success"></i></h5>
            <input
              type="number"
              className="form-control mb-3"
              placeholder="Interest rate (%)"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
            <button className="btn btn-success w-100" onClick={() => onAddInterest(interestRate)}>
              Add Interest
            </button>
          </div>
        </div>
      </div>

      {/* Charge Fees Box */}
      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card cube p-4">
            <h5>Charge Bank Fees <i className="bi bi-cash-stack"></i></h5>
            <button className="btn btn-warning w-100" onClick={onChargeFees}>
              Charge Fees
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Controls;
