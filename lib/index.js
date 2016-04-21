import pr from 'request-promise';
import promise from 'q';
import { ACTIONS } from './actions';

export const DELAY = 200;

export class TelegramBotApi {
    constructor(token) {
        this.token = token;
        this.offset = 0;
        this.sendingMessages = {
            pending: false
        };
    }

    run() {
        this.getMe();
        console.log('\n------------------------------\n');
        setInterval(() => {
            this.getUpdates().then((response) => {
                console.log(response);
                if(response.result.length < 1) {
                    return;
                }
                let tmp = response.result.sort((a, b) => {
                    return a.update_id > b.update_id ? -1 : a.update_id < b.update_id ? 1 : 0;
                });
                this.offset = tmp[0].update_id + 1;
                this.sendingMessages = promise.all(tmp.map((el) => {
                    return this.sendMessage(el);
                }));
                /*all.then(function(){
                    console.log(this.sendingMessages)
                    this.sendingMessages = false;
                })*/
            });
        }, DELAY);
    }

    getActionUrl(action) {
        return `https://api.telegram.org/bot${this.token}/${action}`;
    }

    sendMessage(el) {
        return pr.get({
            uri: this.getActionUrl(ACTIONS.SEND_MESSAGE),
            qs: {
                chat_id: el.message.chat.id,
                text: el.message.text.toUpperCase(),
                reply_to_message_id: el.message.message_id
            },
            json: true
        });
    }

    getUpdates() {
        console.log('getUpdates', this.sendingMessages)
        if(this.sendingMessages.pending){
            return { 
                then: () => {
                }
            };
        }
        return pr.get({
            uri: this.getActionUrl(ACTIONS.GET_UPDATES),
            qs: {
                offset: this.offset
            },
            json: true
        });
    }

    getMe() {
        return pr.get({
            uri: this.getActionUrl(ACTIONS.GET_ME),
            qs: {
                offset: this.offset
            },
            json: true
        });
    }

}



