// this loads the data from the json file about the houses
const houses = require('./db.json');
let globalID = 4;


module.exports = {
    //do something
    getHouses: (req, res) => {
        console.log(houses)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
    

        const body = req.body

        const newHouse = {
            id: globalID,
            address: body.address,
            price: body.price,
            imageURL: body.imageURL
        }

        houses.push(newHouse)
        globalID += 1

        res.status(200).send()

    },
    deleteHouse: (req, res) =>{
        const {id} = req.params

        const index = houses.findIndex(house => {
            return house.id === +id
        })

        houses.splice(index, 1)
        res.status(200).send(houses)
    },

    updatePrice: (req, res) => {
        const {type} = req.body
        const {id} = req.params

        const index = houses.findIndex(house => {
            return house.id === +id
        })



        if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        }else {
            res.status(400)
        }
    }

};
