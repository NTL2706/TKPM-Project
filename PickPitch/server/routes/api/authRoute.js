const authAPI = require("express").Router();
const registerAPI = require("../../api/auth/register");
const loginAPI = require("../../api/auth/login");

authAPI.post("/auth/login",loginAPI.login);
authAPI.post("/auth/register",registerAPI.register);

module.exports = authAPI;
