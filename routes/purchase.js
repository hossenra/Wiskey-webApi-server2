const express = require("express")
const router = express.Router();

const purchaseData = [
 {
 _id: 1,
 "userId": "12345",
 "date": "11 January",
 "totalPurchasePrice": "$65"
},
 {
 _id: 2,
 "userId": "12345",
 "date": "11 January",
 "totalPurchasePrice": "$75"
},
 {
 _id: 3,
 "userId": "12345",
 "date": "11 January",
 "totalPurchasePrice": "$85"
},
 {
 _id: 4,
 "userId": "12345",
 "date": "11 January",
 "totalPurchasePrice": "$95"
},
 {
 _id: 5,
 "userId": "12345",
 "date": "11 January",
 "totalPurchasePrice": "$100"
},
]


router.get("/purchase", (req, res) => {
 res.send(purchaseData)
})

module.exports = router