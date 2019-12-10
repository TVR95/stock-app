const router = require('express').Router();
const request = require("request");
const Stock = require("../models/stockdata.model");

router.route('/').get((req, res) => {
    //  Stock.find()
    // .then(stocks => res.json(stocks))
    // .catch(err => res.status(400).json('Error ' + err));
    res.json('main');
});

router.route('/populatedb').get((req, res) => {
    if(true) {
        request('http://localhost:5000/stocks/data', {json: true, header: { attribute: 'application/json' }}, (error, response, body) => {
            const items = body.items;
            
            if(!error && response.statusCode === 200) {
                items.forEach(item => {
                    let name = item.name;
                    let code = item.code;
                    let unit = item.unit;
                    let price = item.price;
                    let newStock = new Stock({ 
                        name: name,
                        code: code,
                        stock: unit,
                        price: price
                    });
                    
                    newStock.save();
                });  
                res.json('Populated Database!');
        } else {
            res.json('Couldnt populate Database');
        }
        });
    } else {
        res.json('Database is populated');
    }
    // const newStock = new Stock({ 
    //     name: 'dadada',
    //     code: 'dadada',
    //     stock: 2,
    //     price: 3
    // });

    // newStock.save()
    // .then(() => res.json('success'))
    // .catch(err => res.json('error' + err));
});

router.route('/data').get((req, res) => {
    const URL = 'http://webtask.future-processing.com:8068/stocks';

    request(URL, {json: true, header: { attribute: 'application/json' }}, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            return res.json(body);
        }
    });
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const code = req.body.code;
    const stock = Number(req.body.stock);
    const price = Number(req.body.price);
    const dateTime = Date.parse(req.body.dataReceiveTime);

    const newStock = new User({ name, code, stock, price, dateTime });

    newStock.save()
    .then(() => res.json('Stock added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;