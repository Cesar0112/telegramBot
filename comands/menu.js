// const { inlineKeyboard } = require("telebot/lib/methods");
const { bot } = require("..");
const { keyboard } = require("../utils/keyboard");
function menu(msg /*, inline_keyboard*/) {
  // Definir el teclado en línea

  // let inlineKeyboard = bot.inlineKeyboard([
  //   [
  //     bot.inlineButton("Compra rápida", { callback: "/fast_food" }),
  //     bot.inlineButton("Encargo a domicilio", { callback: "/house" }),
  //   ],
  //   [
  //     bot.inlineButton("Ayuda para comprar", {
  //       callback: "/help_compra",
  //     }),
  //     bot.inlineButton("Inicio", { callback: "/start" }),
  //   ],
  // ]);
  const inline_keyboard = {
    buttons: [{ text: "Hola" }],
  };
  // Send message with keyboard markup
  // Este manda el mensaje que debe mostrar
  return bot.sendMessage(msg.from.id, "Bienvenido al menú.", {
    replyMarkup: {
      keyboard: keyboard.buttons,
      resize_keyboard: keyboard.resize,
      one_time_keyboard: keyboard.one_time,
      // inline_keyboard: inline_keyboard.buttons,
    },
  });
}

module.exports = {
  menu,
};
