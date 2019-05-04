const express = require('express')
const app = express()
const port = process.env.PORT || 5000
let paypal = require('paypal-rest-sdk');
let ID = process.env.ID;
let secret = process.env.secret;
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//start nodejs and react servers using npm run dev

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.get("/", function(req, res){
    res.sendFile('client/public' + "index.html");
})

app.post('/buy', ( req , res ) => {
        
    console.log(req.body.price);

    paypal.configure({
        'mode': 'sandbox',
        'client_id': ID,
        'client_secret': secret
      });

    var create_payment_json = {
        "intent": "authorize",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/err"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": req.body.price,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": req.body.price
            },
            "description": "This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        console.log("works")
        if (error) {
            throw error;
            res.redirect('/err');
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            var url = payment.links[1].href;
            return res.redirect(url);
            console.log(url)
        }
    });
});

app.get('/success' , (req ,res ) => {
    console.log(req.query); 
    res.send('success'); 
})

app.get('/err' , (req , res) => {
    console.log(req.query); 
    res.send('error'); 
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))