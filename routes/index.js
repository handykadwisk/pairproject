const express = require('express')
const router = express.Router()
// const authorsRoute = require('./authorsRoute')
// const authorsRoute = require('./authorsRoute')
// const Home = require('../controllers/home')
const Controller = require('../controllers/controller')
const session = require('express-session')

// const postsRoute = require('./postsRoute')
//default dari si routes

//GLOBAL SESSION 
router.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }
    })
);

// middleware
const isLogin = (req, res, next) => {
    const { userId } = req.session;

    if (userId) {
        return res.redirect("/user");
    }

    next();
};

router.get('/', Controller.home)

router.get('/home', Controller.directHome)

router.get('/signup', Controller.signUp)

router.post('/signup', Controller.signUpProcess)

router.get('/login',isLogin, Controller.login)

router.post('/login', Controller.loginProcess)

router.get('/login/admin', Controller.loginAdmin)
  
router.post('/login/admin', Controller.loginAdminProcess)




router.get('/', Controller.home)
router.get('/categories', Controller.listCategories)
router.get('/categories', Controller.listCategories)
router.get('/login', Controller.login)
router.get('/categories/:id', Controller.detail)


router.get('/logout', Controller.logout)



// router.use('/authors', authorsRoute);
// router.use('/posts', postsRoute);




module.exports = router
