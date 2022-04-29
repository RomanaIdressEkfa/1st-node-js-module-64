const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('It is my next site..')
})
const users = [
    { id: 1, name: 'ekfa', email: 'eka@gmail.com' },
    { id: 2, name: 'ekkfa', email: 'eka@gmail.com' },
    { id: 3, name: 'ekfu', email: 'eka@gmail.com' },
    { id: 4, name: 'eva', email: 'eka@gmail.com' },
    { id: 5, name: 'ela', email: 'eka@gmail.com' },
    { id: 6, name: 'sabnur', email: 'eka@gmail.com' }

]
app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
    // console.log(req.query)
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})