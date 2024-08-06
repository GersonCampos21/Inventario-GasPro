const { Router } = require("express");
const auth = require("../security/auth.js")
const session = require("express-session")
const {
  loginSystem,
  loginPOST,
  usersDELETE,
  usersPOST,
  usersPUT,
  usersGET,
  logout
} = require("../controllers/usuarios");


const router = Router();

router.use(session({
  secret: '123456789',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false, // Cambia a true si usas HTTPS
    maxAge: 30 * 60 * 1000 // 30 minutos en milisegundos
  }
}))

router.get("/login",loginSystem);
router.post("/login", loginPOST);
router.get("/api/tecnicos/",auth,usersGET)
router.post("/api/tecnicos/",auth,usersPOST)
router.post("/api/tecnicos/modificar",auth, usersPUT);
router.get("/api/tecnicos/delete/:id",auth, usersDELETE);
router.get("/logout", logout)

module.exports = router;