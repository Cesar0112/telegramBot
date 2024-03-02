const { User } = require("./user");
const { Product } = require("./product");
const { ShoppingCart } = require("./shoppingCart");
const { validateCard } = require("../utils/validations");
/**
 * @class Client
 * @author César
 * @description Clase que hereda de la clase User que puede comprar, pagar y demás cosas
 * @param cardNumber String Número de la tarjeta con la cual puede pagar
 * @param shoppingCart Lista de objetos donde la clave es el nombre del tipo de producto
 */
class Client extends User {
  constructor(id, username, fullname, cardNumber, shoppingCart = ShoppingCart) {
    super(id, username, fullname);
    this.cardNumber = cardNumber;
    this.shoppingCart = shoppingCart;
  }

  /** Funcion que permite agregar una lista de productos o un producto a la cuenta del cliente */
  addToShoppingCart(carrito = ShoppingCart) {
    for (const product in carrito) {
      // Si no está dentro dentro del carrito agregalo con cantd 1
      if (!product in this.shoppingCart) {
        this.shoppingCart[product] = 1;
      } else {
        this.shoppingCart[product] += carrito[product];
      }
    }
  }
  /**
   * Funcion que permite comprar los productos que tiene a su cuenta
   * @description Esta funcion lo que hace es que va a hacer una petición de pago a la API Rest
   * ❌ Falta por implementar esta funcionalidad
   * @param {String} [cardNumber=this.cardNumber]
   */
  payProducts(cardNumber = this.cardNumber) {
    let IsPayed = false;
    let IsValid = validateCard(cardNumber);
    //   Aqui se hace la peticion a la API Rest
    if (IsValid) {
    }
    return IsPayed;
  }
}
module.exports = {
  Client,
};
