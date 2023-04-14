const config = require('./config');
const data = require('./data');

const { Telegraf } = require('telegraf');
const { Extra, Markup } = Telegraf;

// Bot config
const bot = new Telegraf(config.bot_token);
const chats = config.chats;
const yc = config.yc;

// Реакция на новых пользователей в группе
bot.on('new_chat_members', (ctx) => {
    console.log(ctx.message.new_chat_members);
    ctx.replyWithMarkdown(`Привет, *${ctx.message.new_chat_members[0].first_name}*!\nДобро пожаловать в чат!`);
})
// Реакция на must have команды
bot.start((ctx) => {
    ctx.replyWithMarkdown('Привет! Это команда start. ');
})
bot.help((ctx) => {
    //ctx.replyWithMarkdown(data.tasks[0]);
    ctx.replyWithMarkdown('Помощь? Это команда help.');
})
// Команда чтобы узнать id чата или группы
bot.command('chatit', (ctx) => {
    ctx.reply(ctx.message.chat);
})

// Ловим ошибки приложеньки
bot.catch((err) => {
    console.log('Doh!\n', err);
})

// Запускаем poll обработчик бота
console.log('Chat bot started');
bot.startPolling();
