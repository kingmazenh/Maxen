const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/Mazen', express.static(path.join(__dirname, 'Mazen')));

app.get('/videos', (req, res) => {
  fs.readdir(path.join(__dirname, 'Mazen'), (err, files) => {
    if (err) return res.status(500).send('Error');
    const mp4Files = files.filter(f => f.endsWith('.mp4'));
    res.json(mp4Files);
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
