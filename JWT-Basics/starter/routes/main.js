


const express = require('express')
const router = express.Router()

const {login,dashboard} = require('../controllers/main')
const authenticateDashboard = require('../middleware/auth');
router.route('/dashboard').get(authenticateDashboard,dashboard)
router.route('/login').post(login)

module.exports = router