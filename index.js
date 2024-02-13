const express = require('express')
const path = require('path');

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/static'));

//to get a house
const {getHouses} = require('./controller.js')
app.get('/api/houses', getHouses)

// to create a house
const {createHouse} = require('./controller.js');
app.post('/api/houses', createHouse);


// to delete a house
const {deleteHouse} = require('./controller.js');
app.delete('/api/houses/:id', deleteHouse);

// to update a house 
const {updatePrice} = require('./controller.js');
app.put('/api/houses/:id', updatePrice);



app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.listen(4000, () => console.log(`Server running on port 4000`))