const express = require('express');
const app = express();

let stopNotifications = false;

app.use(express.static('.'));
app.use(express.json());

app.get('/status', (req, res) => {
    res.json({ stop: stopNotifications });
});

app.post('/stop', (req, res) => {
    stopNotifications = true;
    res.send('Notifications stopped');
});

app.listen(3000, "0.0.0.0", () => {
    console.log('Server running on port 3000');
});
