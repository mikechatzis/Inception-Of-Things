import express from 'express';

const app = express();
const port = 3000;  // change port for each app (e.g., 3001, 3002)

app.get('/', (req, res) => {
    res.send('Hello from app3!');  // change string for each app
});

app.listen(port, () => {
});
