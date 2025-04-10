const express = require("express");
const router = express.Router();
const connection = require("../config/db");

// Rota para listar todas as categorias (READ)
router.get("/", (req, res) => {
  const sql = "SELECT * FROM categorias";

  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send("Erro ao buscar categorias");
      console.error("Erro:", err);
      return;
    }
    res.json(results);
  });
});

// Rota para adicionar uma nova categoria (CREATE)
router.post("/", (req, res) => {
  const { nome, descricao } = req.body;
  const sql = "INSERT INTO categorias (nome, descricao) VALUES (?, ?)";

  connection.query(sql, [nome, descricao], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao inserir categoria");
      console.error("Erro:", err);
      return;
    }
    res.status(201).send("Categoria inserida com sucesso");
  });
});

// Rota para atualizar uma categoria (UPDATE)
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, descricao } = req.body;
  const sql = "UPDATE categorias SET nome = ?, descricao = ? WHERE id = ?";

  connection.query(sql, [nome, descricao, id], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao atualizar categoria");
      console.error("Erro:", err);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Categoria não encontrada");
    } else {
      res.send("Categoria atualizada com sucesso");
    }
  });
});

// Rota para deletar uma categoria (DELETE)
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM categorias WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send("Erro ao deletar categoria");
      console.error("Erro:", err);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Categoria não encontrada");
    } else {
      res.send("Categoria deletada com sucesso");
    }
  });
});

module.exports = router;
