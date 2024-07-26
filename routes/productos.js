const { Router } = require("express");
const { check } = require("express-validator");;
const {
  productsGET,
  productsPOST,
  productsPUT,
  productsDELETE,
} = require("../controllers/productos");


const router = Router();

router.get("/api/productos/",productsGET);
//Routa validacion y el metodo
router.post( "/api/productos/", [   check("nombre", "El nombre es obligatorio").not().isEmpty(),   ], productsPOST );

router.post("/api/productos/modificar/", productsPUT);
router.get("/api/productos/delete/:id", productsDELETE);
  
module.exports = router;