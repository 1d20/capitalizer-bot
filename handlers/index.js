import {handleMessageMiddleware} from './handle-message';

function defaultHandler(req, res) {
    console.log('unhandled request for', req.body);

    res.sendStatus(404);
}

export const handlers = [
    handleMessageMiddleware,
    defaultHandler
];