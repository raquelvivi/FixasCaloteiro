const pool = require("../config/db.js");
// constructor
const Comprass = function (compras) {
  this.id = compras.id;
  this.dia = compras.dia;
  this.total = compras.total;
  this.apagar = compras.apagar;
  this.tipopag = compras.tipopag;
  this.idfuncio = compras.idfuncio;
  this.idfixa = compras.idfixa;

};

Comprass.create = (NewCompras, result) => {
  pool.query(
    "INSERT INTO compras (nome, apelido, logradouro, numero, bairro, creditomax, datapaga) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [
      NewCompras.nome,
      NewCompras.apelido,
      NewCompras.logradouro,
      NewCompras.numero,
      NewCompras.bairro,
      parseFloat(NewCompras.creditomax),
      parseInt(NewCompras.datapaga),
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created compras: ", {
        id: res.insertId,
        ...NewCompras,
      });
      result(null, { id: res.insertId, ...NewCompras });
    }
  );
};



Comprass.findById = (id, result) => {
  const query = `SELECT f.id, c.dia, c.total, tipopag, c.idfuncio, f.nome, f.apelido, f.creditomax, f.datapaga FROM 
compra c
join fixa f on c.idfixa = f.id
where f.id = ${id}`;

  pool.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.rows.length) {
      console.log("compras encontrado: ", res.rows);
      result(null, res.rows);
      return;
    }

    console.log("compras nao encontrado: res.length = ", res);
    // console.log("compras: ", res.rows);
    result(null, res);
  });
};



Comprass.updateById = (id, compras, result) => {
  console.log(compras);
  pool.query(
    "UPDATE compras SET nome = $1 , apelido = $2 , logradouro = $3 , numero = $4 , bairro = $5 , creditomax = $6 , datapaga = $7  WHERE id = $8",
    [
      compras.nome,
      compras.apelido,
      compras.logradouro,
      compras.numero,
      compras.bairro,
      compras.creditomax,
      compras.datapaga,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {

        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated compras: ", { id: id });
      result(null, { id: id });
    }
  );
};
Comprass.remove = (id, result) => {
  pool.query("DELETE FROM compra WHERE id = $1", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Aluno with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted compras with id: ", id);
    result(null, res);
  });
};
Comprass.removeAll = (result) => {
  pool.query("DELETE FROM compra", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} compras`);
    result(null, res);
  });
};
module.exports = Comprass;
