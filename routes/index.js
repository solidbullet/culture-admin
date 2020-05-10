const router = require('koa-router')()
const util = require('../util.js')
const config = require("../config.json")
const db = require('./crud')
var Article = require('../models/article.model');
const CLOUD_FUNCTION_NAME = 'upload'

router.get('/ueditor', async (ctx, next) => {

  await ctx.render('ueditor', {
    title: '量价突破监控'
  })

})

router.get('/', async (ctx, next) => {

  await ctx.render('index')

})

router.get('/publish', async (ctx, next) => {

  await ctx.render('publish')

})


router.get("/ueditor/ue", async (ctx, next) => {
  var req = ctx.request
  var ActionType = req.query.action;
  if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
    console.log("uploadimage")
    ctx.set('Content-Type', 'text/html')
    // res.setHeader('Content-Type', 'text/html');
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
  }
  // 客户端发起其它请求
  else {
    // console.log('config.json')
    ctx.set('Content-Type', 'application/json');
    ctx.redirect('/ueditor/nodejs/config.json');
  }
});

router.post("/ueditor/ue", async (ctx, next) => {
  let req = ctx.request

  let filetemppath = req.files.upfile.path;
  let originalname = req.files.upfile.name

  let ActionType = req.query.action;
  if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
    let res = await util.sendMultipart('images',filetemppath,originalname);

    let obj = {"url":res.resp_data,title:originalname,"original":originalname,"state":"SUCCESS"}
    ctx.body = obj
    ctx.set('Content-Type', 'text/html')
    // res.setHeader('Content-Type', 'text/html');
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {

    console.log(" post listimage")
  }
  // 客户端发起其它请求
  else {
    // console.log('config.json')
    ctx.set('Content-Type', 'application/json');
    ctx.redirect('/ueditor/nodejs/config.json');
  }
});

router.post("/savearticle", async (ctx, next) => {
  let req = ctx.request
  var art1 = new Article(req.body);
  let res = await db.add(art1)
  ctx.body = res
});

router.post('/uploadThumb', async (ctx, next) => {
  let req = ctx.request
  let filetemppath = req.files.file.path;
  let originalname = req.files.file.name
  let res = await util.sendMultipart('thumbs',filetemppath,originalname);
  ctx.body = res.resp_data
})

router.get('/articlelist', async (ctx, next) => {
  let res = await   db.getLimit(10,Article)
  ctx.body = res
})

router.get('/delarticle', async (ctx, next) => {
  let id = ctx.query.id;
  let res = await   db.delArticleByID(id,Article)
  await ctx.render('index')
})

router.get('/updatearticle', async (ctx, next) => {
  let id = ctx.query.id;
  await ctx.render('upload.ejs', {
    id: id
  })
})

router.get('/detail', async (ctx, next) => {
  let id = ctx.query.id;
  await ctx.render('detail.ejs', {
    id: id
  })
})
router.post('/updatearticlebyid', async (ctx, next) => {

  let data = ctx.request.body;
  
  let updateobj ={title:data.title,content:data.content,thumb:data.thumb,author:data.author,nav1:data.nav1}
  console.log(updateobj)
  let res = await  db.updateByID(data.id,updateobj,Article) 
  ctx.body = res
})

router.get('/findbyid', async (ctx, next) => {
  let id = ctx.query.id;
  let res = await  db.findByID(id,Article) 
  ctx.body = res
})

router.get('/string', async (ctx, next) => {

  let req = ctx.request
  console.log(req.body)
  ctx.body = "save success"
})

router.get('/json', async (ctx, next) => {
  let json = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }');
  ctx.body = json
})

module.exports = router
