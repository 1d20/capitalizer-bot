/* global process */
import {telegramBotApi} from './lib';
import express from 'express';
import bodyParser from 'body-parser';
import {handlers} from './handlers';

const port = process.env.PORT;
const token = process.env.BOT_TOKEN;

const app = express();

app.use(bodyParser.json());

app.post('/redeploy', (req, res) => {
    console.log(req.body);

    res.sendStatus(200);
});

app.post(`/${token}`, handlers);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
