import React, { useState, useEffect, useRef } from 'react';
import './NationalityPredictor.css';

function NationalityPredictor() {
  // State variable 'name' holds the user input, and 'nationality' holds the fetched API result.
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState(null);

  // useRef to create a reference to the input field for auto-focusing.
  const inputRef = useRef();

  // useEffect to focus on the input field when the component loads (mounts).
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to fetch nationality data from the Nationalize API when the user submits a name.
  const fetchNationality = async () => {
    // Check if the input is not empty.
    if (name) {
      try {
        // Fetching data from the Nationalize API based on the name entered.
        const response = await fetch(`https://api.nationalize.io?name=${name}`);
        const data = await response.json();
        // Set the response data to the 'nationality' state.
        setNationality(data);
      } catch (error) {
        console.error('Error fetching nationality data:', error);  // Error handling for failed fetch requests.
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-5 nationality-card">

        <h1 className="text-center mb-4">Predict Nationality</h1>

        {/* Brief instruction for users */}
        <p className="text-muted text-center description">
          <b>Enter any name to predict the possible nationality based on the name.</b>
        </p>

        {/* Input field for name and a button to trigger the fetchNationality function */}
        <div className="input-group mb-3">
          <input
            ref={inputRef}  // Auto-focus on this input field.
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}  
            placeholder="Enter a name"
          />
          <button className="btn btn-primary" onClick={fetchNationality}>
            Predict
          </button>
        </div>

        {/* Conditionally rendering the results only if nationality data exists */}
        {nationality && nationality.country && nationality.country.length > 0 && (
          <div className="mt-4">
            <h2 className="text-center">Nationality Predictions for {name}:</h2>
            <table className="table table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Probability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Display the first country's ID and probability from the fetched data */}
                  <td>{nationality.country[0].country_id}</td>
                  <td>{(nationality.country[0].probability * 100).toFixed(2)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default NationalityPredictor;
