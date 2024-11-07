import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import db from './config/database.js';
import clientRoutes from './routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({path: path.resolve(__dirname, '../.env')});

const port = process.env.PORT
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes);


app.listen(port, () => {
    console.log(`${chalk.bold('Server')} is ${chalk.green('running')} on port: ${chalk.bold.magenta(port)}`);
})

