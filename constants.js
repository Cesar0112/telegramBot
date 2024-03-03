const TELEGRAM_BOT_TOKEN = "6367970784:AAFBBuX35czjRofeMghOjrS7inHUz5zcdVQ";
const { BUTTONS } = require("./utils/buttons");
function replyMarkupPrincipal(bot) {
  return bot.keyboard(
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
}
module.exports = {
  TELEGRAM_BOT_TOKEN,
  replyMarkupPrincipal,
};
