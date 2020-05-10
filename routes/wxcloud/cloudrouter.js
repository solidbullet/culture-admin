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

})

router.get('/getarticlebyid', async (ctx, next) => {
    let {id} = ctx.query;
    let res = await db.findByID(id)
    ctx.body = res;

})
router.get('/searcharticles', async (ctx, next) => {
    let {word} = ctx.query;
    let res = await db.serachArticles(word)
    ctx.body = res;

})
router.get('/readnumplusone', async (ctx, next) => {
    let {id} = ctx.query;
    let res = await db.readnumplusone(id)
    ctx.body = res;
})
/*
router.get('/get24hour', async (ctx, next) => {
  let res = await db.get24hour(24);
  ctx.body = res;
})
*/
module.exports = router
