const categoriasService = require("../services/categoriasService");

const categoriasController = {
  async index(req, res, next) {
    // Listar categorias
    try {
      const {searchParams} = req.query;
      const categorias = await categoriasService.index(searchParams);
      res.status(200).json({
        data: categorias,
        status: 200,
        message: "Categorias carregadas com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async show(req, res, next) {
    // Mostrar categoria específica
    try {
      const categoria = await categoriasService.show(req.params.id);

      res.status(200).json({
        data: categoria,
        status: 200,
        message: "Categoria encontrada com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async store(req, res, next) {
    // Criar nova categoria
    try {
      const novaCategoria = await categoriasService.store(req.body);
      res.status(201).json({
        data: novaCategoria,
        status: 201,
        message: "Categoria criada com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    // Atualizar categoria existente
    try {
      const categoriaAtualizada = await categoriasService.update(
        req.params.id,
        req.body
      );
      res.status(200).json({
        data: categoriaAtualizada,
        status: 200,
        message: "Categoria atualizada com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },

  async destroy(req, res, next) {
    // Deletar categoria
    try {
      await categoriasService.destroy(req.params.id);
      res.status(200).json({
        data: null,
        status: 200,
        message: "Categoria deletada com sucesso.",
      });
    } catch (err) {
      next(err);
    }
  },
};

module.exports = categoriasController;
