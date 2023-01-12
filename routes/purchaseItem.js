const express = require("express")
const router = express.Router();

const purchaseItemData = [
 {
 _id: 1,
 "userId": "12345",
 "name": "Tim",
 "quality": "New",
 "price": "$40",
 "totalPurchaseItemPrice": "$155"
},
 {
 _id: 2,
 "userId": "12345",
 "name": "Maarten",
 "quality": "New",
 "price": "$50",
 "totalPurchaseItemPrice": "$165"
},
 {
 _id: 3,
 "userId": "12345",
 "name": "Hasan",
 "quality": "New",
 "price": "$60",
 "totalPurchaseItemPrice": "$175"
},
 {
 _id: 4,
 "userId": "12345",
 "name": "Povilas",
 "quality": "New",
 "price": "$70",
 "totalPurchaseItemPrice": "$185"
},
 {
 _id: 5,
 "userId": "12345",
 "name": "Jony",
 "quality": "New",
 "price": "$90",
 "totalPurchaseItemPrice": "$195"
},
]

router.get("/purchaseItemb", (req, res) => {
 res.send(purchaseItemData)
})

module.exports = router;