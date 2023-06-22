const express = require("express");
const cors = require("cors"); // Cors se usa para evitar errores de cross domain access
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Conectar a base de datos
    this.conectarDB();

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicación
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS  // Cors se usa para evitar errores de cross domain access
    this.app.use(cors());

    //Lectura y parseo del body en JSON
    this.app.use(express.json());

    //Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Servidor corriendo en puerto", this.port)
    );
  }
}

module.exports = Server;
