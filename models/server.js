const express = require("express");
const cors = require("cors"); // Cors se usa para evitar errores de cross domain access

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    //CORS  // Cors se usa para evitar errores de cross domain access
    this.app.use(cors());

    //Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Servidor corriendo en puerrto", this.port)
    );
  }
}

module.exports = Server;
