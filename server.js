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
    console.log('git hook arrived', req.body);

    const exec = require('child_process').exec;
    exec('git pull && pm2 restart caps', (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        if (error !== null) {
            console.log(`exec error: ${error}`);

            res.status(500).send(error);
        }

        res.sendStatus(200);
    });

});

app.post(`/${token}`, handlers);

app.all('*', () => {
    res.send(`I'm bot`);
});

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
