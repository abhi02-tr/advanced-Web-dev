const router = require('express').Router();

router.route('/customer')
.get(async (req, res) => {
    res.send('helloo');
})