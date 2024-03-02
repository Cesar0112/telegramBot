const { TELEGRAM_BOT_TOKEN } = require("./constants");
const TeleBot = require("telebot");
// Instancio el Bot con el token y el plugin para usar comandButtons
const bot = new TeleBot({
  token: TELEGRAM_BOT_TOKEN,
  usePlugins: ["commandButton"],
});
exports.bot = bot; //<-- exporto el bot para poder ser usado por otros archivos

// Importar comandos del bot
const { start } = require("./comands/start");
const { menu } = require("./comands/menu");
const { subscribe } = require("./comands/subscribe");
const { fast_food } = require("./comands/fast_food");

// Manejar el comando de subscripcion
start();
// Manejar el comando de menu
menu();
// Manejar el comando de subscribirse
subscribe();

// Init bot
bot.start();
