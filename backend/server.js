import express from 'express';
import dotenv from 'dotenv';
import jokes from './jokes.json' with { type: 'json' };

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('server is ready, Hello World!');
});

//get the slice of 5 top jokes from the jokes.json file
app.get('/api/jokes', (req, res) => {
    const topJokes = jokes.slice(0, 5);
    res.json(topJokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`); 
});
