const express = require("express")
const router = express.Router();

const userData = [
 {
 _id: 1,
 "firstName": "Tim",
 "lastName": "Coper",
 "email": "tim@gmail.com",
 "birthday": "25 january",
 "password": "####"
},
 {
 _id: 2,
 "firstName": "Peter",
 "lastName": "Parker",
 "email": "peter@gmail.com",
 "birthday": "25 March",
 "password": "####"
},
 {
 _id: 3,
 "firstName": "Povilas",
 "lastName": "Din",
 "email": "povilas@gmail.com",
 "birthday": "25 April",
 "password": "####"
},
 {
 _id: 4,
 "firstName": "Hasan",
 "lastName": "Yohan",
 "email": "hasan@gmail.com",
 "birthday": "25 May",
 "password": "####"
},
 {
 _id: 5,
 "firstName": "Zara",
 "lastName": "Shen",
 "email": "zara@gmail.com",
 "birthday": "25 June",
 "password": "####"
},
]

router.get("/users", (req, res) => {
 res.send(userData)
})

module.exports = router