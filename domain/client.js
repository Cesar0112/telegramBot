const User = require("./user");
const Product = require("./product");
/**
 * @class Client
 * @author César
 * @description Clase que hereda de la clase User que puede comprar, pagar y demás cosas
 * @param cardNumber String Número de la tarjeta con la cual puede pagar
 * @param shoppingCart Lista de objetos donde la clave es el nombre del tipo de producto
 */
class Client extends User {
  constructor(id, username, fullname, cardNumber, shoppingCart = {}) {
    super(id, username, fullname);
    this.cardNumber = cardNumber;
    this.shoppingCart = shoppingCart;
  }
  /**
   * Funcion que permite comprar los productos que tiene a su cuenta
   * ❌ Falta por implementar esta funcionalidad
   */
  buy() {}
  /** Funcion que permite agregar una lista de productos o un producto a la cuenta del cliente */
  add(carrito = {}) {
    for (const product in carrito) {
      // Si no está dentro dentro del carrito agregalo con cantd 1
      if (!product in this.shoppingCart) {
        this.shoppingCart[product] = 1;
      } else {
        this.shoppingCart[product] += carrito[product];
      }
    }
  }
  /** @description Esta funcion lo que hace es que va a hacer una petición de pago a la API Rest
   *
   */
  pay() {
    let IsPayed = false;
    //   Aqui se hace la peticion a la API Rest
    return IsPayed;
  }
}
module.exports = {
  Client,
};
