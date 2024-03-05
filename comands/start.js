const { bot } = require("..");
const { WELLCOME_MESSAGE } = require("../constants");
const { keyboard } = require("../utils/keyboard");

function start(msg) {
  return bot.sendMessage(msg.from.id, WELLCOME_MESSAGE, {
    replyMarkup: {
      keyboard: keyboard.buttons,
      resize_keyboard: keyboard.resize,
      one_time_keyboard: keyboard.one_time,
    },
  });
}

module.exports = {
  start,
};
