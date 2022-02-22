const {telegraf} = require ('../node_modules/telegraf');
const sha256_string = require('../node_modules/sha256');
require('../node_modules/dotenv').config();
const r002_token = process.env.r002;

const bot = new telegraf(r002_token);

const welcome_message = "Welcome to the Hasharobot! Send any messages here, and I'll send you back its equivalent hashed with SHA256 algorithm. ";
bot.start((ctx) => ctx.reply(welcome_message));

bot.help((ctx) => ctx.reply('Send me a message and I send you back the equivalent hashed string using SHA256. '));
bot.on('sticker', (ctx) => ctx.reply('oh! thank you for sticker. I can\'t hash them however. 👍'));
bot.hears('hi', (ctx) => ctx.reply(sha256_string('hi')));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
