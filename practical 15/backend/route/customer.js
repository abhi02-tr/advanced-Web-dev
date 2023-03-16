const router = require('express').Router();
const { Customer } = require('../model/customer.model');

router.route('/customer')
.get(async (req, res) => {
    Customer.find({}).exec()
    .then(data => {
        res.json({message: "Success", data});
    })
    .catch(err => {
        console.error(err);
        res.json({message: "Finding custome error.", err})
    })
})
.post(async (req, res) => {
    try {
        const { name, email, order } = req.body;
        const customer = new Customer({
            name: name,
            email: email,
            order: order
        });

        customer.save()
        .then(data => {
            res.json({message: "Customer created.", data})
        })
        .catch(err => {
            console.error(err);
            res.json({message: "data not created.", err})
        })
    } catch (error) {
        console.error(error);
        res.json({message: "Eroor", error});
    }
})
.patch(async (req, res) => {
    const {email} = req.body;
    const data = req.body.data;
    
})

module.exports = router;