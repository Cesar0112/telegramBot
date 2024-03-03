const TeleBot = require("telebot");
const bot = new TeleBot("7087828075:AAEB7LgKDoWnWQGAjidVc_hBn3p6H5Qp4Ow");

const replyMarkup = bot.keyboard(
  [
    ["/buttons", "/inlineKeyboard"],
    ["/start", "/hide"],
  ],
  { resize: true }
);
bot.on(["*"], (msg) => {
  console.log(bot);
  return bot.sendMessage(msg.from.id, "Hola", { replyMarkup });
});
bot.start();
