const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// ملفات الواجهة
app.use(express.static('public'));

// ملفات الفيديو
app.use('/mazen', express.static(path.join(__dirname, 'mazen')));

// API: جلب أسماء الفيديوهات داخل المجلد
app.get('/videos', (req, res) => {
  fs.readdir(path.join(__dirname, 'mazen'), (err, files) => {
    if (err) return res.status(500).send('حدث خطأ');
    const videos = files.filter(f => f.endsWith('.mp4'));
    res.json(videos);
  });
});

app.listen(PORT, () => console.log(`✅ السيرفر شغال على http://localhost:${PORT}`));
