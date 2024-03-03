const { bot } = require("..");

function menu() {
  bot.on(["/menu", "/menú"], (msg) => {
    // Inline keyboard markup
    const replyButtonMenuCommand = bot.inlineKeyboard([
      [
        // First row with command callback button
        // Manda a ejecutar la compra rápida
        // ❌ Falta por implementar esta funcionalidad
        bot.inlineButton("Compra rápida", { callback: "/fast_food" }),
        //Boton que permite encargar la compra a domicilio
        // ❌ Falta por implementar esta funcionalidad
        bot.inlineButton("Encargo a domicilio", { callback: "/house" }),
      ],
      [
        // Third row with command callback button
        // Boton de ayuda muestra un mensaje explicando como comprar
        // ❌ Falta por implementar esta funcionalidad
        bot.inlineButton("Ayuda para comprar", { callback: "/help_compra" }),
        // boton que vuelve al inicio
        // ✔️ Listo ya el inicio
        bot.inlineButton("Inicio", { callback: "/start" }),
      ],
      [],
    ]);

    // Send message with keyboard markup
    // Este manda el mensaje que debe mostrar
    return bot.sendMessage(msg.from.id, "Bienvenido al menú.", {
      replyMarkup: replyButtonMenuCommand,
    });
  });
}
module.exports = {
  menu,
};
