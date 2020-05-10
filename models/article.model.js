const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ARTICLESchema = new Schema({
  title: { type: String, required: true },
  //categoryId: { type: Schema.Types.ObjectId,required: true },  // 文章类别
  nav1: { type: String ,default:null},  
  content: { type: String ,default:null}, 
  thumb: { type: String ,default:null},                  // 文章形式 连载、原创、转载三种
  readnum: { type: Number,default:0},
  author: { type: String ,default:null}, 
  createdAt: { type: Date, default: Date.now }
});

var ARTICLE = mongoose.model('ARTICLE', ARTICLESchema)

// 暴露接口
module.exports = ARTICLE;

