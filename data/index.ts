import axios from 'axios';
import express from 'express';
import  dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';


dotenv.config();

const app = express();
const port = process.env.PORT;
const apiUrl = 'https://api.pandascore.co/additions?sort=id&page=1&per_page=50&type=league&videogame=1';


app.get('/api/esports', async (req, res) => {
    try {
        const axiosResponse = await axios.get(apiUrl, {
            headers: {
                'Application': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });

        const filePath = path.join(__dirname, 'data.json');
        fs.writeFileSync(filePath, JSON.stringify(axiosResponse.data, null, 2));

        res.status(200).send(axiosResponse.data);
    } catch(error){
        console.log('Error while making the request', error);
        res.status(500).send('ERR while making the request');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});