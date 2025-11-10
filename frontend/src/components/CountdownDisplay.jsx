import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

function CountdownDisplay() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchTime = async () => {
      try {
        const res = await api.get('/timer');
        if (!mounted) return;
        setTimeLeft(res.data.remaining);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  return (
    <div style={{ marginTop: 20, fontSize: 24 }}>
      {timeLeft !== null ? (timeLeft > 0 ? `${timeLeft}s remaining` : 'Time is up!') : 'No active timer'}
    </div>
  );
}

export default CountdownDisplay;
