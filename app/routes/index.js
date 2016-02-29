'use strict'

const { join } = require('path')

const { Router } = require('express')

const ctrl = require('./ctrl')

const router = Router()

router.get('/a', ctrl.a)
router.get('/b', ctrl.b)

module.exports = router
