const express = require('express')
const router = express.Router()
// const authorsRoute = require('./authorsRoute')
// const authorsRoute = require('./authorsRoute')
// const Home = require('../controllers/home')
const Controller = require('../controllers/controller')
// const postsRoute = require('./postsRoute')
//default dari si routes

router.get('/', Controller.home)
router.get('/categories', Controller.listCategories)
router.get('/categories', Controller.listCategories)
router.get('/login', Controller.login)
router.get('/categories/:id', Controller.detail)


router.get('/logout', Controller.logout)



// router.use('/authors', authorsRoute);
// router.use('/posts', postsRoute);




module.exports = router
