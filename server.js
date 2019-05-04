const express = require('express')
const app = express()
const port = 5000
let paypal = require('paypal-rest-sdk');
let ID = process.env.ID;
let secret = process.env.secret;

//start nodejs and react servers using npm run dev

app.get("/", function(req, res){
    res.sendFile('client/public' + "index.html");
})

app.get('/buy' , ( req , res ) => {
        
    // var ammount = req.body.price;

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
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
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