const express = require('express')
const router = express.Router()
const authorsRoute = require('./authorsRoute')
const postsRoute = require('./postsRoute')
//default dari si routes

router.get('/', Controller.home)

router.use('/authors', authorsRoute);
router.use('/posts', postsRoute);




module.exports = router
