const util = require('../util.js')
const config = require("../config.json")
const rp = require('request-promise');


async function getarticles(nav1, skipnum) {
    let access_token = await util.getToken();
    let cloudurl = `https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${access_token}&env=${config.ENV}&name=article`;
    let reqData = { action: 'getarticles',pagenum: 20, nav1: nav1, skipnum: skipnum }
    console.log(reqData)
    let options = {
        method: 'POST',
        uri: cloudurl,
        body: reqData,
        json: true // Automatically stringifies the body to JSON
    };
    let res = await rp(options)
    console.log(res)
    return res.resp_data;
}

module.exports = {
    getarticles: getarticles
}
