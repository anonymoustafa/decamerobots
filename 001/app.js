 require('dotenv').config();
 const {Telegraf} = require('telegraf');
 const bot = new Telegraf(process.env.my_hello_world_robot_token);
 bot.start((ctx) => ctx.reply('Welcome'));
 bot.help((ctx) => ctx.reply('Send me a sticker'));
 bot.on('sticker', (ctx) => ctx.reply('👍'));
 bot.hears('hi', (ctx) => ctx.reply('Hey there'));
 bot.launch();
 
 //  Enable graceful stop
 process.once('SIGINT', () => bot.stop('SIGINT'));
 process.once('SIGTERM', () => bot.stop('SIGTERM'));
 console.log(process.env.my_hello_world_robot_token);

