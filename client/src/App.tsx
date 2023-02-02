import React from 'react';
import './App.css';
import PaceChart from './components/PaceChart';
import WorkoutSchedule from './components/WorkoutSchedule';

const App: React.FC = () => {
  return (
      <div className="App">
        <h1>
          Piku 🏃🏽‍♀️ Boston
        </h1>
        <br></br>
        <br></br>
        <WorkoutSchedule/>
        <br></br>
        <br></br>
        <PaceChart/>
      </div>
  );
}

export default App;
