const { TELEGRAM_BOT_TOKEN } = require("./constants");
const TeleBot = require("telebot");
const { BUTTONS } = require("./utils/buttons");
const { keyboard } = require("./utils/keyboard");
// Instancio el Bot con el token y el plugin para usar comandButtons
const bot = new TeleBot({
  token: TELEGRAM_BOT_TOKEN,
  usePlugins: ["commandButton", "namedButtons"],
  pluginConfig: {
    namedButtons: {
      buttons: BUTTONS,
    },
  },
});
exports.bot = bot; //<-- exporto el bot para poder ser usado por otros archivos

// Importar comandos del bot
const { start } = require("./comands/start");
const { menu } = require("./comands/menu");
const { regist } = require("./comands/regist");
const { fast_food } = require("./comands/fast_food");

bot.on("text", (msg) => {
  const text = msg.text;
  if (text === "/start") {
    // Manejar el comando de subscripcion
    start(msg);
  } else if (text === BUTTONS.menu.command || text === BUTTONS.menu.label) {
    // Manejar el comando de menu
    var inline_keyboard;
    menu(msg /*, inline_keyboard*/);
    // return bot.sendMessage(msg.from.id, "Bienvenido al menú.", {
    //   replyMarkup: {
    //     inlineKeyboard: inline_keyboard.inlineKeyboard, // Corregido aquí
    //   },
    // });
  } else if (text === "/regist") {
    // Manejar el comando de registrarse
    regist(msg);
  } else {
    return bot.sendMessage(msg.from.id, `Has enviado: ${text}`, {
      replyMarkup: {
        keyboard: keyboard.buttons,
        resize_keyboard: keyboard.resize,
        one_time_keyboard: keyboard.one_time,
      },
    });
  }
});

// Init bot
bot.start();
