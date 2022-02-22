const { Telegraf } = require('../node_modules/telegraf');
require('../node_modules/dotenv').config();
const bot = new Telegraf(process.env.hello_JS)


bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using context shortcut
  ctx.leaveChat()
})

bot.on('text', (ctx) => {
  // Explicit usage
  ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

  ctx.reply(`Hello ${ctx.botInfo.can_join_groups}`)
  ctx.reply(`Hello ${ctx.botInfo.can_read_all_group_messages}`)
  ctx.reply(`Hello ${ctx.botInfo.first_name}`)
  ctx.reply(`Hello ${ctx.botInfo.id}`)
  ctx.reply(`Hello ${ctx.botInfo.is_bot}`)
  ctx.reply(`Hello ${ctx.botInfo.language_code}`)
  ctx.reply(`Hello ${ctx.createChatInviteLink.toString()}`)
  // Using context shortcut
  ctx.reply(`Hello ${ctx.state.role}`)
})

bot.on('callback_query', (ctx) => {
  // Explicit usage
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

  // Using context shortcut
  ctx.answerCbQuery()
})

bot.on('inline_query', (ctx) => {
  const result = []
  // Explicit usage
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

  // Using context shortcut
  ctx.answerInlineQuery(result)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

