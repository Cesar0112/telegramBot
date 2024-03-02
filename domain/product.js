/**
 * @class
 * @author César
 * Esta es la clase que va a representar a los productos
 * @param category:String
 * @param price:Double
 */
class Product {
  constructor(category, type, price) {
    this.category = category;
    this.price = price;
    this.type = type;
  }
}
module.exports = {
  Product,
};
