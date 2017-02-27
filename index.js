const path = require('path')

require('marko/node-require').install()

module.exports = (req, res, next) => {
  const views = path.resolve(req.app.get('views'))
  res.global = {}

  res.render = (view, locals = {}, callback = res) => {
    const template = path.join(views, view)
    if(process.env.NODE_ENV === 'development') {
      delete require.cache[require.resolve(template)]
    }
    const data = Object.assign({}, locals, {
      $global: Object.assign({}, locals.$global, res.global)
    })

    require(template).render(data, callback)
  }

  next()
}
