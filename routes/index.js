var express = require('express');
var router = express.Router();
var axios = require('axios');
require('dotenv').config()

var key = process.env.OPEN_WEATHER_API;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory' });
});

router.get('/stock', function(req, res, next) {
  var stock = [
    {
      id: 2022,
      name: "socks",
      description: "This is a short description of  what this product is",
      price: 25.55,
      taxable: false,
      availabeDate: 1350517005,
    },
    {
      id: 2044,
      name: "bacon",
      description: "This is a short description of  what this product is",
      price: 25.55,
      taxable: false,
      availabeDate: 1350517005,
    },
    {
      id: 2045,
      name: "bycicle",
      description: "This is a short description of  what this product is",
      price: 25.55,
      taxable: false,
      availabeDate: 1350517005,
    },
    {
      id: 2050,
      name: "child",
      description: "This is a short description of  what this product is",
      price: 25.55,
      taxable: false,
      availabeDate: 1350517005,
    }
  ];
  res.json({ data: stock });
});


module.exports = router;
