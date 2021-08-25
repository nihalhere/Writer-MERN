const router = require('express').Router()
const { ensureGuest} = require('../middleware/auth')

// @desc    Show login page 
// @route   GET /
router.get('/', ensureGuest,(req, res)=>{
    res.render('login', {
        layout:'login',
    })
})

module.exports = router