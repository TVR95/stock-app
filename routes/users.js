const express = require("express");
const router = require('express').Router();
const bcrypt = require("bcrypt");
const { validateUserLogin, validateUserRegostration }= require("../models/user.model");
let User = require('../models/user.model');
const auth = require("../middleware/auth");

// number of salt rounds that bcrypt will do during hashing password.
const saltRounds = 10;

router.route('/current').get(auth, async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
});

router.route('/login').post(async (req, res) => {
    // req.body validation
    const { error } = validateUserLogin(req.body);
    if(error) return res.status(400).json('Validation error');

    User.findOne({email: req.body.email}, (err, foundUser) => {
        if(err) {
            console.log(err);
        } else {
            if(foundUser) {
                bcrypt.compare(req.body.password, foundUser.password, async (err, result) => {

                    if(result) {
                        const token = foundUser.generateAuthToken();
                        await res.header("x-auth-token", token).redirect('/home');
                    } else {
                        res.redirect('/signIn');
                    }     
                });
            }
        }
    });
});

router.route('/registration').post(async (req, res) => {
    // req.body validation
    const { error } = validateUserRegistration(req.body);
    if(error) return res.status(400).json('Validation error');

    const password = req.body.password;
    const repeatPassword = req.body.repeatPassword;

    if(password === repeatPassword && password !== '' && repeatPassword !== '') {
            await bcrypt.hash(password, saltRounds, async (err, hash) => {
                const newUser = new User({
                    email: req.body.email,
                    password: hash,
                    wallet: req.body.walletFunds
                });

                await newUser.save()
                .then(() => {
                    const token = newUser.generateAuthToken();
                    res.header("x-auth-token", token).redirect('/home');
                })
                .catch(err => console.log(err));
            });

    } else {
        res.redirect('/signUp');
    }
});

router.route('/password').post((req, res) => {
    
});

module.exports = router;