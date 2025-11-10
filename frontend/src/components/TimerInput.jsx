import React, { useState } from 'react';
import api from '../services/api.js';

function TimerInput() {
  const [seconds, setSeconds] = useState('');

  const startTimer = async () => {
    const secs = Number(seconds);
    if (!secs || secs <= 0) return alert('Enter a positive number of seconds');
    try {
      await api.post('/timer', { seconds: secs });
    } catch (err) {
      console.error(err);
      alert('Failed to start timer');
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input
        type="number"
        placeholder="Enter seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        style={{ padding: '8px', width: '180px', marginRight: '8px' }}
      />
      <button onClick={startTimer} style={{ padding: '8px 12px' }}>Start</button>
    </div>
  );
}

export default TimerInput;
