const TeleBot = require("telebot");

const BUTTONS = {
  menu: {
    label: "📋 Menú",
    command: "/menu",
  },

  hide: {
    label: "⌨️ Hide keyboard",
    command: "/hide",
  },
};

const bot = new TeleBot({
  token: "7087828075:AAHVsuk2BbUK2fva7koNQwj36IzOv5-kqiM",
  usePlugins: ["namedButtons"],
  pluginConfig: {
    namedButtons: {
      buttons: BUTTONS,
    },
  },
});

bot.on("/menu", (msg) => msg.reply.text("Menu command!"));
bot.on("/hide", (msg) =>
  msg.reply.text("Type /start to show keyboard again.", { replyMarkup: "hide" })
);

bot.on("/start", (msg) => {
  let replyMarkup = bot.keyboard([[BUTTONS.menu.label], [BUTTONS.hide.label]], {
    resize: true,
  });

  return bot.sendMessage(msg.from.id, "Mensaje de bienvenida", { replyMarkup });
});

bot.start();
