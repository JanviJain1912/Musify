const express =  require("express");
const loggedIn = require("../controllers/loggedin");
const authController = require("../controllers/auth");
const logout = require("../controllers/logout");
const router = express.Router();

router.get("/", loggedIn, (req,res) => {
    if (req.user){
        res.render("index", {status:"loggedIn", user: req.user});
    }
    else{
        res.render("index", {status:"no", user: "nothing"});
    }
   
});
router.get("/login",function(req,res){
    res.sendFile("login.html", {root: "./public/"});
});

router.get("/signup",function(req,res){
    res.sendFile("signup.html", {root: "./public"});

});

router.get('/about', (req, res) => {
    res.sendFile("about.html", { root: './public/' })
});
router.get('/library', (req, res) => {
    res.sendFile("library.html", { root: './public/' })
});

router.get("/logout" , logout);
// when ever you use logout button use href="/api/logout"
module.exports = router;