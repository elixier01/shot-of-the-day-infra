const express = require('express');
const path = require('path');
const app = express();
const staticDir = path.join(__dirname, 'demo-web'); // adjust only if your index is elsewhere
app.use(express.static(staticDir));
app.get('*', (req, res) => {
res.sendFile(path.join(staticDir, 'index.html'));
});
const port = process.env.PORT || process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on ${port}'));