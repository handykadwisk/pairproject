const {Category, Vapehascategory, Vapestore,User,Sold}= require('../models');
const vapestore = require('../models/vapestore');
const bcrypt = require("bcryptjs");
class Controller{

    static async home(req, res){
        try {
            let data = await Vapestore.findAll({include:Vapehascategory})
            // console.log(data);
            // res.send(data)
            res.render("home",{data})
        } catch (error) {
            console.log(error.message);
            res.send(error.message)
        }
    }

    static async directHome(req, res) {
        try {
          let data = await Shoe.findAll()
          // res.send(data)
          res.render("home",{data});
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }

      static async signUp(req, res) {
        try {
          let errorMsg = [];
          if (req.query.error) {
            errorMsg = req.query.error.split(",");
          }
          res.render("home", { errorMsg });
        } catch (error) {
          
          res.send(error);
        }
      }

      static async signUpProcess(req, res) {
        try {
          const { name, email, password, role } = req.body;
          const hashPassword = await bcrypt.hash(password, 12);
          await User.create({ name, email, role, password: hashPassword });
          res.redirect("/login");
        } catch (error) {
            let errorMsg = [];
            if (error.name === "SequelizeValidationError") {
              errorMsg = error.errors.map((err) => err.message);
              res.redirect(`/signup?errors=${errorMsg}`);
            } else {
              console.log(error);
              res.send(error);
            }
        }
      }

    static async homeAdmin(req, res) {
        try {
            const id = req.session.userId
    
            const user = await User.findByPk(id)
    
            if(user.role !== 'admin') {
                res.redirect('/user')
            } 
           
          res.render("homeAdmin");
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }

    static async listCategories(req, res){
        try {
            let data = await Category.findAll({include:Vapehascategory})
            // console.log(data);
            res.send(data)
        } catch (error) {
            console.log(error.message);
            res.send(error.message)
        }
    }

    static async detail(req,res){
        try {
            let id = req.params.id
            // res.send(req.params)
            let data = await Vapestore.findOne({include:Vapehascategory, where:{id:id}})
            // res.send(data,id)
            res.render("detail",{data})
        } catch (error) {
            console.log(error.message);
            res.send(error.message)
        }
    }


    static async login(req, res) {
        try {
          const { error } = req.params;
          res.render("login", {
            error,
          });
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }

      static async loginProcess(req, res) {
        try {
          const { email, password } = req.body;
          const user = await User.findOne({
            where: { email },
          });
          console.log(user);
    
          if (user) {
            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (isValidPassword) {
              if (user.role === "admin") {
                req.session.userId = user.id;
                res.redirect("/admin");
              } else if (user.role === "user") {
                req.session.userId = user.id;
                res.redirect("/user");
              }
            } else {
              const error = "Invalid email or password";
              return res.redirect(`/login?error=${error}`);
            }
          }
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }
      static async loginAdmin(req, res) {
        try {
          const { error } = req.params;
          res.render("loginAdmin", {
            error,
          });
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }
    
      static async loginAdminProcess(req, res) {
        try {
          const { email, password } = req.body;
          const user = await User.findOne({
            where: { email },
          });
          return res.redirect("/admin");
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }


    static async logout(req, res) {
        try {
          await req.session.destroy();
          res.redirect("/");
        } catch (error) {
          console.log(error);
          res.send(error);
        }
      }





}
module.exports = Controller