const { BUTTONS } = require("./buttons");
// Definir el teclado personalizado
const keyboard = {
  buttons: [[BUTTONS.menu.label, "/administration"], [BUTTONS.regist.label]],
  resize: true,
  one_time: false,
};
module.exports = {
  keyboard,
};
