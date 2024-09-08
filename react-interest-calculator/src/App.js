import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AccountBalance from './AccountBalance';
import Controls from './Controls';

function App() {
  const [balance, setBalance] = useState(1000); // Initial bank balance

  // Function to handle deposit actions
  const deposit = (amount) => {
    setBalance(balance + amount);
  };
  
   // Function to handle withdrawal actions
  const withdraw = (amount) => {
    const newBalance = balance - amount;
    if (newBalance < 0) {
      alert('Insufficient funds!');
    } else {
      setBalance(newBalance);
    }
  };
  // Function to handle adding interest
  const addInterest = (rate) => {
    setBalance(balance + (balance * rate / 100));
  };
   // Function to handle charging bank fees
  const chargeFees = () => {
    const fee = balance * 0.05; // Charging 5% interest fees
    setBalance(balance - fee);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="text-center py-5 text-white bg-primary">
        <h1>Welcome to Vanessa Bank</h1> 
      </header>

      <div className="container-fluid bg-image flex-grow-1">
        <div className="row justify-content-center mt-4">
          <div className="col-md-6 col-lg-4 mb-4">
            <AccountBalance balance={balance} />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <Controls
            onDeposit={deposit}
            onWithdraw={withdraw}
            onAddInterest={addInterest}
            onChargeFees={chargeFees}
          />
        </div>
      </div>

      <footer className="mt-auto text-center py-3 bg-primary text-white">
        <p>©Vanessa Mokoena 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
