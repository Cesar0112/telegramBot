const CANTD_NUMBERS_OF_METROPOLITAN_CARD = 16;
/**
 * Solo valida la cantidad de dígitos, no si es un tipo de tarjeta
 * @description Función que valida la cantidad de dígitos de la tarjeta magnética
 * @param {String} cardNumber
 * @returns true or false
 */
function validateCard(cardNumber = String) {
  if (cardNumber.length != CANTD_NUMBERS_OF_METROPOLITAN_CARD) {
    return false;
  }
  return true;
}
module.exports = {
  validateCard,
};
