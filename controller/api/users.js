const service = require('../../service/api/users')

class usersController {
  static async find(ctx) {
    ctx.body = await service.findAll()
  }
  static async insert(ctx) {
    ctx.body = await service.insert(ctx.request.body)
  }
  static async delete(ctx) {
    ctx.body = await service.delete(ctx.request.body)
  }
  static async update(ctx) {
    ctx.body = await service.update(ctx.request.body)
  }
}

module.exports = usersController