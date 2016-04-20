/* global process */
import dotenv from 'dotenv';
import {TelegramBotApi} from './lib';

dotenv.config();

const token = process.env.BOT_TOKEN;

const telegramBotApi = new TelegramBotApi(token);

telegramBotApi.run();