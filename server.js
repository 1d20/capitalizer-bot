/* global process */
import dotenv from 'dotenv';
import {TelegramBotApi} from './lib';
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config();

const port = process.env.PORT;
const token = process.env.BOT_TOKEN;
const telegramBotApi = new TelegramBotApi(token);

const app = express();

app.use(bodyParser.json());

app.post(`/${token}`, (req, res) => {
    console.log(req.body);

    res.send('ok');
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
