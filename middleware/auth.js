const jwt = require("jsonwebtoken");
const config = require("config");
const express = require("express");

module.exports = (req, res, next) => {
    // get the token from the header if present
    const token = req.headers['x-access-token'] || req.headers['authorization'];

    // if token isn't found return response without going to the next middleware
    if(!token) return res.status(401).json('Access denied. No token provided.');

    try {
        // if can verify the token set and pass req.user to next middleware
        const decoded = jwt.verify(token, config.get('myprivatekey'));
        req.user = decoded;
        next();
    } catch(ex) {
        // invalid token
        res.status(400).json('Invalid token');
    }
};