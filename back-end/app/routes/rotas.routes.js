module.exports = app => {
  const Fixass = require("../controllers/fixas.controllers.js");
  const Compras = require("../controllers/compras.controllers.js");

  var router = require("express").Router();

  // FICHAS
  router.post("/api/fixa", Fixass.create);
  router.get("/api/fixa", Fixass.findAll);
  router.get("/api/fixa/:id", Fixass.findOne);
  router.put("/api/fixa/:id", Fixass.update);
  router.delete("/api/fixa/:id", Fixass.delete);
  router.delete("/api/fixa", Fixass.deleteAll);

  // COMPRAS
  router.post("/api/compra", Compras.create);
  // router.get("/api/compra", Compras.findAll);
  router.get("/api/compra/:id", Compras.findAll);
  router.put("/api/compra/:id", Compras.update);
  // router.delete("/api/compra/:id", Compras.delete);
  // router.delete("/api/compra", Compras.deleteAll);

  // FUNCIONARIO
  // router.post("/api/funcio", Funcios.create);
  // router.get("/api/funcio", Funcios.findAll);
  // router.get("/api/funcio/:id", Funcios.findOne);
  // router.put("/api/funcio/:id", Funcios.update);
  // router.delete("/api/funcio/:id", Funcios.delete);
  // router.delete("/api/funcio", Funcios.deleteAll);

  app.use("/", router);
};