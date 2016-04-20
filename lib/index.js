import pr from 'request-promise';
import {ACTIONS} from './actions';

export const DELAY = 100;

export class TelegramBotApi {
    constructor(token) {
        this.token = token;
    }

    run() {
        this.makeRequest();

        setInterval(() => {
            // TODO: fetch updates
        }, DELAY);
    }

    getActionUrl(action) {
        return `https://api.telegram.org/bot${this.token}/${action}`;
    }

    makeRequest() {
        pr.get(this.getActionUrl(ACTIONS.GET_ME))
            .then((response) => {
                console.log(ACTIONS.GET_ME, response);
            })
            .catch((reason) => {
                console.log(reason);
            });
    }
}