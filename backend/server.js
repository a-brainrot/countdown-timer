const express = require('express');
const cors = require('cors');
const timerRoutes = require('./routes/timerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/timer', timerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
