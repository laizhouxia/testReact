import express from 'express'
import ClaimBuyerAppContainer from '../client/components/appContainer'
import * as axinan from '../auth/axinan/index'

const BUYER_TYPE = 'buyer'
const MERCHANT_TYPE = 'merchant'

var router = express.Router()
var React = require('react')

router.get('/home', function(req, res, next) {
  var userAgent = req.headers['user-agent'] || 'all'

  global.AppSetting = {
    userAgent: userAgent,
    settings: {}
  }

  var element = React.createElement(ClaimBuyerAppContainer, {userAgent: userAgent})

  res.render('index', {
    title: 'App Main',
    settings: global.AppSetting,
   })
})

router.get('/autherr', function(req, res, next) {
  res.render('error', {
    title: 'Auth Error',
    message: 'You are not authorized to access this page',
    error: {
      message: 'You are not authorized to access this page'
    }
  })
})

router.get('/logout', function(req, res, next) {
  Auth.logout(res)
  res.render('logout', {
    title: 'Logged out',
    message: 'Thank you. You are now logged out'
  })
})

module.exports = router
