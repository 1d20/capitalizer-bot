import {handleMessageMiddleware} from './handle-message';

function defaultHandler(req, res) {
    res.sendStatus(404);
}

export const handlers = [
    handleMessageMiddleware,
    defaultHandler
];