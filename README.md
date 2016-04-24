# capitalizer-bot
Capitaliser Bot for telegram
Send him a message and he will give you CAPS reply of sam text, so just dont waste time for holding SHIFT all the time

## Prereq
* Register a bot
* Get a token
* Get a domain and host with ssl (mandatory for webhooks)
* In case of self-signed certificate  
  `openssl req -newkey rsa:2048 -sha256 -nodes -keyout YOURPRIVATE.key -x509 -days 365 -out YOURPUBLIC.pem -subj "/C=US/ST=New York/L=Brooklyn/O=Example Brooklyn Company/CN=YOURDOMAIN.EXAMPLE"`
* Enable webhook:  
  send post to `https://api.telegram.org/bot<token>/setWebhook` as multipart/form-data   
  containing `url` = `https://yourdomain.com/<token>` and `certificate` as File

## Start
* copy `.env.example` to `.env` file
* update `BOT_ENV` param with real bot Token
* install `npm i`
* run `npm start` or `npm prod` (using `pm2` global)
