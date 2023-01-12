const express = require("express")
const router = express.Router();

const itemData = [
 {
 _id: 1,
 "name": "Tim",
 "description": "item details",
 "dateAdded": "11 january",
 "price": "$55"
},
 {
 _id: 2,
 "name": "Maarten",
 "description": "item details",
 "dateAdded": "11 january",
 "price": "$45"
},
 {
 _id: 3,
 "name": "Hasan",
 "description": "item details",
 "dateAdded": "11 january",
 "price": "$35"
},
 {
 _id: 4,
 "name": "Povilas",
 "description": "item details",
 "dateAdded": "11 january",
 "price": "$25"
},
 {
 _id: 5,
 "name": "Zara",
 "description": "item details",
 "dateAdded": "11 january",
 "price": "$20"
},
]

router.get("/item", (req, res) => {
 res.send(itemData)
})

module.exports = router;