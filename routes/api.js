const router = require('express').Router()

const middleware = require('./middlewares').checkToken
const ApiPostsRouter = require('./api/posts')

router.use('/posts', middleware , ApiPostsRouter)

module.exports = router