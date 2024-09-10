import React from 'react';
import './App.css';
import NationalityPredictor from './components/NationalityPredictor';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <NationalityPredictor />
      </div>
      <Footer />
    </>
  );
}

export default App;
