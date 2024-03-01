const { bot } = require("..");

function start() {
  bot.on(["/start", "/iniciar"], (msg) => {
    // Inline keyboard markup
    const replyButtonStartCommand = bot.inlineKeyboard([
      [
        // First row with command callback button
        // Manda a llamar un comando en este caso el del menu
        // ✔️ Listo ya el menu
        bot.inlineButton("Menú", { callback: "/menu" }),
      ],
      [
        // Second row with regular command button
        // No ejecuta un comando pero si manda texto de callback
        // bot.inlineButton("Regular data button", { callback: "hello" }),
        // ❌ Falta por implementar esta funcionalidad
        bot.inlineButton("Subscribirse", { callback: "/subscribe" }),
      ],
      [
        // Third row with command callback button
        // Despliega la ayuda general de la cafetería
        // ❌ Falta por implementar esta funcionalidad
        bot.inlineButton("Ayuda", { callback: "/help" }),
      ],
      [
        // Third row with command callback button
        // Despliega la ayuda general de la cafetería
        // ✔️ Falta por implementar esta funcionalidad
        bot.inlineButton("Pruebas", { callback: "/msg" }),
      ],
    ]);

    // Send message with keyboard markup
    // Este manda el mensaje que debe mostrar
    return bot.sendMessage(
      msg.from.id,
      "Bienvenido a la Cafetería el Enano, este es el asistente bot listo para servirle!.",
      {
        replyMarkup: replyButtonStartCommand,
      }
    );
  });

  // Command /msg
  bot.on("/msg", (msg) => {
    // return bot.sendMessage(msg.from.id, msg);
    console.log(msg.from.id, "->", msg.from.username);
  });

  // // Button callback
  // bot.on("callbackQuery", (msg) => {
  //   console.log("callbackQuery data:", msg.data);
  //   bot.answerCallbackQuery(msg.id);
  // });
}
module.exports = {
  start,
};
