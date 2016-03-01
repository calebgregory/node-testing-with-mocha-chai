'use strict'

const { join } = require('path')

const { Router } = require('express')

const ctrl = require('./ctrl')

const router = Router()

router.post('/attack', ctrl.attack)
router.get('/game', ctrl.b)

module.exports = router
