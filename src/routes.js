const express = require("express");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({ ok: true });
});

module.exports = routes;
