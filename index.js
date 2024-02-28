const { TELEGRAM_BOT_TOKEN } = require("./constants");
const TeleBot = require("telebot");
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);
exports.bot = bot;

const { subscribe } = require("./subscribe");
// Manejar el comando de subscripcion
subscribe();

// Init bot
bot.start();
