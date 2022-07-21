var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');
const upload = require("../lib/multer");

router.get('/', controller.all)
router.get('/popular', controller.getMostPopular)
router.get('/latest', controller.getLatest)
router.get('/category/:category?/:page?', controller.getByCategory)
router.post('/myRecipes', controller.myRecipes)
router.get('/:id', controller.byId)
router.post('/create', upload.single('image'), controller.create)
router.post('/:id/update', upload.single('image'), controller.update)
router.post('/:id/remove', controller.remove)
router.post('/like', controller.addToFavourites)


module.exports = router;