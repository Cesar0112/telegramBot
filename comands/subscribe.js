const { bot } = require("..");

function subscribe() {
  bot.on(["/subscribe"], (msg) => {
    // Verifica que no esté subscrito ya en la cafetería por el número de teléfono
    // ❌ Falta por implementar esta funcionalidad
    //   if () {

    //   }

    // Inline keyboard markup
    const replyButtonSubscribeCommand = bot.inlineKeyboard([
      [
        // Second row with regular command button
        // No ejecuta un comando pero si manda texto de callback
        // bot.inlineButton("Regular data button", { callback: "hello" }),
        // ✔️ Vira para el menu
        bot.inlineButton("Inicio", { callback: "/start" }),
      ],
      [
        // Third row with command callback button
        // Despliega la ayuda general de la cafetería
        // ❌ Falta por implementar esta funcionalidad
        bot.inlineButton("Ayuda para subscribirse", {
          callback: "/help_subscribe",
        }),
      ],
    ]);

    // Send message with keyboard markup
    // Este manda el mensaje que debe mostrar
    return bot.sendMessage(
      msg.from.id,
      "Este es el asistente de subscripción.",
      {
        replyMarkup: replyButtonSubscribeCommand,
      }
    );
  });

  // // Command /hello
  // bot.on("/hello", (msg) => {
  //   return bot.sendMessage(msg.from.id, "Hello!");
  // });

  // // Button callback
  // bot.on("callbackQuery", (msg) => {
  //   console.log("callbackQuery data:", msg.data);
  //   bot.answerCallbackQuery(msg.id);
  // });
}
module.exports = {
  subscribe,
};
