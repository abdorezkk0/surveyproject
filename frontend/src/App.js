import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateSurvey from './pages/CreateSurvey'; // Make sure this component exists

function SurveyList() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching surveys...");
    // Fetch surveys from your backend
    fetch('http://localhost:5000/api/surveys')
      .then(response => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Data received:", data);
        setSurveys(data.data || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Could not fetch surveys. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Available Surveys</h2>
      
      {loading && <p>Loading surveys...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      
      {!loading && !error && (
        <>
          {surveys.length === 0 ? (
            <p>No surveys found. Create your first one!</p>
          ) : (
            <ul>
              {surveys.map(survey => (
                <li key={survey._id}>
                  <h3>{survey.title}</h3>
                  <p>{survey.description}</p>
                  <p>Questions: {survey.questions.length}</p>
                </li>
              ))}
            </ul>
          )}
          <Link to="/create-survey" className="create-button">Create New Survey</Link>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Intern Survey Project</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<SurveyList />} />
            <Route path="/create-survey" element={<CreateSurvey />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;