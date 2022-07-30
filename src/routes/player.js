
const router = require('express').Router()

const playerController = require('../controllers/playerController')

router.get('/', playerController.list);
router.post('/add', playerController.save);
router.get('/delete/:id', playerController.delete);
router.get('/edit/:id', playerController.edit);
router.post('/edit/:id', playerController.update);

module.exports = router;