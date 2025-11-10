import React from 'react';
import CountdownDisplay from './components/CountdownDisplay.jsx';
import TimerInput from './components/TimerInput.jsx';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Countdown Timer</h1>
      <TimerInput />
      <CountdownDisplay />
    </div>
  );
}

export default App;
