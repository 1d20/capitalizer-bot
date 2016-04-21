import {telegramBotApi} from './../lib';

export function handleMessageMiddleware(req, res, next) {
    if (req.body.message) {
        const message = req.body.message;

        console.log('message received', message);

        return telegramBotApi.sendMessage({
            chat_id: message.chat.id,
            text: message.text.toUpperCase()
        }).then((response) => {
            return res.send(response);
        }).catch((reason) => {
            return res.status(403).send(reason);
        });
    }

    next();
}