const { bot } = require("..");
const { replyMarkupPrincipal } = require("../constants");
function start() {
  bot.on(["/start", "/iniciar"], (msg) => {
    return bot.sendMessage(
      msg.from.id,
      "Bienvenido a la Cafetería el Enano, este es el asistente bot listo para servirle!.",
      replyMarkupPrincipal(bot)
    );
  });
}
module.exports = {
  start,
};
