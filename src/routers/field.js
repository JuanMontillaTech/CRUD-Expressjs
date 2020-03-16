const express = require('express');
const router = express.Router();
const fieldController= require('../controllers/fieldController');

router.get('/', fieldController.list);
router.post('/add',fieldController.save);
router.get('/delete/:id',fieldController.delete);
router.get('/update/:id',fieldController.edit);
router.post('/update/:id',fieldController.update);
router.get('/data/:id', fieldController.data);
module.exports = router;