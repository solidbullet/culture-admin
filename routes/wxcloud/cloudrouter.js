const router = require('koa-router')()
const db = require('./articlecrud')

router.prefix('/wxcloud')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

router.get('/getarticlespage', async (ctx, next) => {
    let {nav1,pagenum,skipindex} = ctx.query;
    let res = await db.getarticlespage(nav1,pagenum,skipindex)

  ctx.body = res;
  /*
  await ctx.render('show', {
    title: '量价突破数据库系统'
  })

  */
})

/*
router.get('/get24hour', async (ctx, next) => {
  let res = await db.get24hour(24);
  ctx.body = res;
})
*/
module.exports = router
