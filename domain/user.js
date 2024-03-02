/**
 * @class User
 * Clase que determina los usuarios de la aplicación que pueden ser del tipo cliente o administrador
 * @param id:String Identificador del usuario
 * @param username:String Nombre de usuario en Telegram
 * @param fullname:String Nombre Completo compuesto por los nombres más los apellidos separados por espacios
 */
class User {
  constructor(id, username, fullname) {
    this.id = id;
    this.username = username;
    this.fullname = fullname;
  }
}
module.exports = {
  User,
};
