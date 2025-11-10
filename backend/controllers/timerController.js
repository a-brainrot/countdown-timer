let endTime = null;

exports.startTimer = (req, res) => {
  const { seconds } = req.body;
  const secs = Number(seconds) || 0;
  if (secs <= 0) return res.status(400).json({ message: 'Invalid seconds' });
  endTime = Date.now() + secs * 1000;
  res.json({ message: 'Timer started', endTime });
};

exports.getTimer = (req, res) => {
  if (!endTime) return res.json({ remaining: 0 });
  const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
  res.json({ remaining });
};
