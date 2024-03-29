/*
  KittyBot
  Shows random Kitty pictures and gifs.
*/

const TeleBot = require("telebot");
const bot = new TeleBot("7087828075:AAHVsuk2BbUK2fva7koNQwj36IzOv5-kqiM");

// Great API for this bot
const API = "https://thecatapi.com/api/images/get?format=src&type=";

// Command keyboard
const replyMarkup = bot.keyboard([["/kitty", "/kittygif"]], {
  resize: true,
  once: false,
});

// Log every text message
bot.on("text", function (msg) {
  console.log(`[text] ${msg.chat.id} ${msg.text}`);
});

// On command "start" or "help"
bot.on(["/start", "/help"], function (msg) {
  return bot.sendMessage(
    msg.chat.id,
    "😺 Use commands: /kitty, /kittygif and /about",
    { replyMarkup }
  );
});

// On command "about"
bot.on("/about", function (msg) {
  let text =
    "😽 This bot is powered by TeleBot library " +
    "https://github.com/kosmodrey/telebot Go check the source code!";

  return bot.sendMessage(msg.chat.id, text);
});

// On command "kitty" or "kittygif"
bot.on(["/kitty", "/kittygif"], function (msg) {
  let promise;
  let id = msg.chat.id;
  let cmd = msg.text.split(" ")[0];

  // Photo or gif?
  if (cmd == "/kitty") {
    promise = bot.sendPhoto(id, API + "jpg", {
      fileName: "kitty.jpg",
      serverDownload: true,
    });
  } else {
    promise = bot.sendDocument(id, API + "gif#", {
      fileName: "kitty.gif",
      serverDownload: true,
    });
  }

  // Send "uploading photo" action
  bot.sendAction(id, "upload_photo");

  return promise.catch((error) => {
    console.log("[error]", error);
    // Send an error
    bot.sendMessage(id, `😿 An error ${error} occurred, try again.`);
  });
});

// Start getting updates
bot.start();
