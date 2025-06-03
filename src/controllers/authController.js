const authService = require("../services/authService");

async function login(req, res, next) {
  try {
    const { email, senha } = req.body;
    const result = await authService.login(email, senha);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = { login };
