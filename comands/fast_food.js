const { bot } = require("..");

function fast_food() {
  bot.on(["/fast_food"], (msg) => {
    // Inline keyboard markup
    const replyButtonFast_FoodCommand = bot.inlineKeyboard([
      [
        // ❌ Falta por implementar esta funcionalidad
        // Aqui dentro debe de ir la lista de alimentos que se pueden comprar de manera
        // rapida
      ],
      [
        // boton que vuelve al inicio
        // ✔️ Listo ya el inicio
        bot.inlineButton("Inicio", { callback: "/start" }),
      ],
    ]);

    // Send message with keyboard markup
    // Este manda el mensaje que debe mostrar
    return bot.sendMessage(msg.from.id, "Bienvenido al menú.", {
      replyMarkup: replyButtonFast_FoodCommand,
    });
  });
}
module.exports = {
  fast_food,
};
