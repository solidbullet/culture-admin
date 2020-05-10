require('../../db/index');
var Article = require('../../models/article.model');



const getarticlespage = async (nav1,pagenum,skipindex) => await Article.find({nav1:nav1}).limit(pagenum).skip(skipindex).catch((error)=>console.log(error));   //分页查询 nav1,pagenum,skipindex
const findByID = async (id) => await Article.findById(id).catch((error)=>console.log(error));
const serachArticles = async (reg) => await Article.find({title:{$regex : reg}}).catch((error)=>console.log(error));
const readnumplusone = async (id) => await Article.where({_id: id}).update({$inc: {readnum: 1}})


module.exports = {getarticlespage,findByID,serachArticles,readnumplusone};

/*多条件联合模糊查询
const keyword = this.params.keyword //从URL中传来的 keyword参数
const reg = new RegExp(keyword, 'i') //不区分大小写
const result = yield User.find(
    {
        $or : [ //多条件，数组
            {nick : {$regex : reg}},
            {email : {$regex : reg}}
        ]
    },
    {
        password : 0 // 返回结果不包含密码字段
    },
    {
        sort : { _id : -1 },// 按照 _id倒序排列
        limit : 100 // 查询100条
    }
)

*/