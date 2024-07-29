const { Router } = require("express");
const { check } = require("express-validator");;
const {
  loginSystem,
  loginPOST,
  usersDELETE,
  usersPOST,
  usersPUT,
  usersGET
} = require("../controllers/usuarios");


const router = Router();

router.get("/login",loginSystem);
router.post("/login", loginPOST);
router.get("/api/tecnicos/",usersGET)
router.post("/api/tecnicos/",usersPOST)
router.post("/api/tecnicos/modificar", usersPUT);
router.get("/api/tecnicos/delete/:id", usersDELETE);

module.exports = router;