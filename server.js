require('dotenv').config();

const pr = require('request-promise');

const token = process.env.BOT_TOKEN;

pr.get(`https://api.telegram.org/bot${token}/getMe`)
  .then((response) => {
    console.log(response);
  })
  .catch((reason) => {
    console.log(reason);
  });