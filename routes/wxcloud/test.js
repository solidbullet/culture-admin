const db = require('./articlecrud');


(async ()=>{
    // let addres = await db.add(art1)
    // let delres = await db.delArticleByTitle('ltcusdt',Article)
    // let id = '5eb771eb60657a15187a30a5'
    // let updateres = await db.updateByID(id,{author:'jyq1'},Article)
    // let res = await  db.findByID('5eb79ed2ed186d33345d0adf',Article) //5eb79ed2ed186d33345d0adf
    let res = await db.getarticlespage('残疾预防',10,0)
    console.log(res)
})()
