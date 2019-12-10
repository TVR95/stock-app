const router = require('express').Router();
const request = require("request");
const Stock = require("../models/stockdata.model");

router.route('/').get((req, res) => {
    res.json('main');
});

router.route('/populatedb').get((req, res) => {
    request('http://localhost:5000/stocks/data', {json: true, header: { attribute: 'application/json' }}, (error, response, body) => {
        const items = body.items;
        
        if(!error && response.statusCode === 200) {
            items.forEach(item => {
                let newStock = new Stock({ 
                    name: item.name,
                    code: item.code,
                    stock: item.unit,
                    price: item.price
                });
                
                newStock.save();
            });  
            res.json('Populated Database!');
    } else {
        res.json('Couldnt populate Database');
    }
    });
});

router.route('/data').get((req, res) => {
    const URL = 'http://webtask.future-processing.com:8068/stocks';

    request(URL, {json: true, header: { attribute: 'application/json' }}, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            return res.json(body);
        }
    });
});

router.route('/datadb').get((req, res) => {
    Stock.find(async (err, foundStocks) => {
        err ? res.status(400).json(err) : await res.status(200).json(foundStocks);
    });
});

router.route('update').post((req, res) => {

});

router.route('/buy').post((req, res) => {

});

router.route('/sell').post((req, res) => {

});

module.exports = router;