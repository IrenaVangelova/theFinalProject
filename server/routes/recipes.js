var express = require('express');
var router = express.Router();
const controller = require('../controllers/recipes');

router.get('/', controller.all)
router.get('/popular', controller.getMostPopular)
router.get('/category/:category?', controller.getByCategory)
router.post('/create', controller.create)
router.post('/update', controller.update)
router.get('/:id', controller.byId)
router.post('/:id/remove', controller.remove)
router.post('/like', controller.addToFavourites)
router.post('/latest', controller.getLatest)

module.exports = router;