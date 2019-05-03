const express = require('express')
const app = express()
const port = 5000

app.get("/", function(req, res){
    res.sendFile('client/public' + "index.html");
})

// app.use('/static', express.static(path.join(__dirname, 'client/public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))