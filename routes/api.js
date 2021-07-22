const router = require('express').Router()

const middlewares = require('./middlewares')
const ApiPostsRouter = require('./api/posts')

router.use('/posts', middlewares.checkToken ,ApiPostsRouter)
//router.use('/posts', ApiPostsRouter) //uncomment this line for not use middlewares

module.exports = router