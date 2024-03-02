const { Product } = require("./product");
/**
 * @description Define o simula el carrito del supermercado donde se almancenan los produtos y su cantidad
 * @param {Product} product
 */
class ShoppingCart {
  constructor(product = Product, cantd = 1) {
    this.product = product;
    this.cantd = cantd;
  }
}
module.exports = {
  ShoppingCart,
};
