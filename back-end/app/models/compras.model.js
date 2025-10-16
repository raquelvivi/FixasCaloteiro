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
    "INSERT INTO compra (dia, total, apagar, tipopag, idfuncio, idfixa) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      NewCompras.dia,
      parseInt(NewCompras.total),
      NewCompras.apagar,
      NewCompras.tipopag,
      NewCompras.idfuncio,
      NewCompras.idfixa,
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
 const query = `
    SELECT f.id as pessoa_id, f.nome, f.apelido, f.creditomax, f.datapaga,
           c.id as compra_id, c.dia, c.total, c.tipopag, c.idfuncio, c.apagar
    FROM compra c
    JOIN fixa f ON c.idfixa = f.id
    WHERE f.id = ${id}
  `;

  pool.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.rows.length) {
      const pessoa = {
        id: res.rows[0].pessoa_id,
        nome: res.rows[0].nome,
        apelido: res.rows[0].apelido,
        creditomax: res.rows[0].creditomax,
        datapaga: res.rows[0].datapaga,
      };

      const compras = res.rows.map((r) => ({
        id: r.compra_id,
        dia: r.dia,
        total: r.total,
        tipopag: r.tipopag,
        idfuncio: r.idfuncio,
        total: r.apagar
      }));

      result(null, { pessoa, compras });
      return;
    }

    result(null, null);})
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
