const express = require('express')

const app = express();

app.get('/',(req, res) => {
    res.send('<h2>Hello from the /</h2>')
})
app.get('/test',(req, res) => {
    res.send('<h2>Hello from the /test</h2>')
})
app.get('/start',(req, res) => {
    res.send('<h2>Hello from the /start</h2>')
})

app.listen(7777, ()=> {
    console.log('Server is listening at port 7777')
});