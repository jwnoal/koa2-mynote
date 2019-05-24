const router = require('koa-router')()
const controller = require('../../controller/api/users')

router.prefix('/api/users')

router.get('/', async (ctx, next) => {
  ctx.body = 'api'
})

router.get('/find', controller.find)

router.post('/insert', controller.insert)

router.delete('/delete', controller.delete)

router.put('/update', controller.update)

module.exports = router
