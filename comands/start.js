const { bot } = require("..");
const { BUTTONS } = require("../utils/buttons");
function start() {
  bot.on(["/start", "/iniciar"], (msg) => {
    let replyMarkup = bot.keyboard(
      // Manda a llamar un comando en este caso el del menu
      // ✔️ Listo ya el menu

      [
        [BUTTONS.menu.label], //❌ Al lado de este boton debe ir el boton de panel de administracion que solo se ve para el administrador

        // Manda a subscribirse en la tienda
        // ❌ Falta por implementar esta funcionalidad
        [BUTTONS.regist.label],
      ],

      { resize: true }
    );

    return bot.sendMessage(
      msg.from.id,
      "Bienvenido a la Cafetería el Enano, este es el asistente bot listo para servirle!.",
      { replyMarkup }
    );
  });
}
module.exports = {
  start,
};
