import dotenv from 'dotenv';
import pr from 'request-promise';
import promise from 'q';
import { ACTIONS } from './actions';

dotenv.config();

class TelegramBotApi {
    constructor(token) {
        this.token = token;
    }

    getActionUrl(action) {
        return `https://api.telegram.org/bot${this.token}/${action}`;
    }

    sendMessage(qs) {
        console.log(qs);
        console.log(this.getActionUrl(ACTIONS.SEND_MESSAGE));

        return pr.get({
            qs,
            uri: this.getActionUrl(ACTIONS.SEND_MESSAGE),
            json: true
        });
    }

    getMe() {
        return pr.get({
            uri: this.getActionUrl(ACTIONS.GET_ME),
            json: true
        });
    }

}

const token = process.env.BOT_TOKEN;
export const telegramBotApi = new TelegramBotApi(token);
