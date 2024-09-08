import React from 'react';
//The bank balance that will be changed and updated as customer withdrwas and deposits money
function AccountBalance({ balance }) {
  return (
    <div className="card p-4 text-center cube">
      <h2>Bank Balance</h2>
      <h1 className="text-primary">${balance.toFixed(2)}</h1>
    </div>
  );
}

export default AccountBalance;
