require('../db/index');



//以下为关于article的操作
const addMany = async (model,arr) => await model.insertMany(arr,{ordered:true}).catch((error)=>console.log(error));
const add = async v => await v.save().catch((error)=>console.log(error));
const findByID = async (id,model) => await model.findById(id,model).catch((error)=>console.log(error));

const getLimit = async (num,model) => await model.find({}).limit(num).catch((error)=>console.log(error)); 
const getarticlepage = async (num,model) => await model.find({}).limit(num).catch((error)=>console.log(error));   //分页查询

const delArticleByTitle = async (title,model) => await model.deleteOne({ title: title }).catch((error)=>console.log(error));
const delArticleByID = async (id,model) => await model.deleteOne({ _id: id }).catch((error)=>console.log(error));
const updateByID = async (id,updateobj,model) => await model.findByIdAndUpdate(id,updateobj).catch((error)=>console.log(error));


module.exports = {addMany,add,getLimit,delArticleByTitle,updateByID,delArticleByID,findByID};

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