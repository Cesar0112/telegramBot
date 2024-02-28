const { bot } = require(".");

function subscribe() {
  bot.on(["/start", "/iniciar"], (msg) =>
    msg.reply.text(
      "Bienvenido a la Cafetería el Enano, este es el asistente bot listo para servirle!."
    )
  );
}

module.exports = {
  subscribe,
};
