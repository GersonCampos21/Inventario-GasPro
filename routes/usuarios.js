const { Router } = require("express");
const { check } = require("express-validator");;
const {
  loginSystem,
  loginPOST,
  productsPUT,
  productsDELETE,
} = require("../controllers/usuarios");


const router = Router();

router.get("/login",loginSystem);

router.post("/login", loginPOST);
//Routa validacion y el metodo
// router.post( "/", [   check("nombre", "El nombre es obligatorio").not().isEmpty(),   ], productsPOST );

// router.post("/modificar/", productsPUT);
// router.get("/delete/:id", productsDELETE);

module.exports = router;