const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,        //En el curso las usan pero actualmente no la acepta mongoose
      //   useFindAndModify: false,     //En el curso las usan pero actualmente no la acepta mongoose
    });

    console.log("Base de datos conectada correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = { dbConnection };
