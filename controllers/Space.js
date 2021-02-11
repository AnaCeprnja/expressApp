
const express = require('express')

const router = express.Router()

const db = require('../models')

router.get('/', (req, res)=> {

  db.space.findAll()
  .then (spaceX =>{
      res.render('spaceX',{ spaceX })
  })