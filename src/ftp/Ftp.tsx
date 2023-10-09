import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(express.json());

// Endpoint GET do pobierania danych z zewnętrznego pliku JSON
app.get('/get-data', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://blasiak.info/sharedData/data2.json');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd pobierania danych' });
  }
});

// Endpoint POST do zapisywania danych do zewnętrznego pliku JSON
app.post('/save-data', async (req: Request, res: Response) => {
  try {
    const newData = req.body;
    const response = await axios.post('https://blasiak.info/sharedData/data2.json', newData);
    const savedData = response.data;
    res.json(savedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Błąd zapisywania danych' });
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});

const dataToSend = {
  username: 'Marta',
  password: '67890',
};

axios.post('http://localhost:3000/save-data', dataToSend)
  .then((response) => {
    console.log('Odpowiedź z serwera:', response.data);
  })
  .catch((error) => {
    console.error('Błąd:', error);
  });