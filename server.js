const cors = require('cors')
const express = require('express');
const app = express();
const axios = require('axios')

app.use(cors())

app.get('/', async(req,res) => {

    try {

        // const response = await axios('https://jsonplaceholder.typicode.com/users')
        // response.data
        //* response é a resposta do axios MAS eu tiro o data dde dentro do response
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)

        return res.json(data)

        // return res.json([
        //     { name: 'jeff' },
        //     { name: 'diego' }
        // ])
        
    } catch (error) {
        console.error(error)
    }

})

app.listen('4567')