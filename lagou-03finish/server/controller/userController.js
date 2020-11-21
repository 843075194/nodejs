

var userModel = require("../model/userModel");
var signup = async function (req, res) {
    try {
        var arr = await userModel.find({
            username: req.body.username
            //这个地方是在页面上传入的值
        })
        console.log(arr);
        if (arr.length) {
            res.render("error", {
                data: JSON.stringify({
                    msg: "用户已存在"
                })
            })
            return;
        }
        await userModel.insert(req.body);
    //console.log(req.body);
// [Object: null prototype] { username: 'aaaa', password: '123' }
        res.render("success", {
            data: JSON.stringify({
                msg: "注册成功",
                username: req.body.username
            })
        })
    } catch (error) {
        res.render("error", {
            data: JSON.stringify({
                msg: "注册失败"
            })
        })
    }
    console.log("注册来了");
}

var signin = async function (req, res) {
    try {
        var arr = await userModel.find(req.body)
        console.log(req.body);
        console.log(req);
        // { username: 'aaaa', password: '123' }
        if (arr.length) {
            res.render("success", {
                data: JSON.stringify({
                    msg: "登录成功",
                    username: arr[0].username
                })
            })
            return;
        }
        res.render("error", {
            data: JSON.stringify({
                msg: "登录失败"
            })
        })
    } catch (error) {
        res.render("error", {
            data: JSON.stringify({
                msg: "登录失败"
            })
        })
    }
}

module.exports = {
    signup, signin
}

/* arr ======>
[ { _id: 5fb8cd0307a0872a68c976eb,
    username: 'aaa',
    password: '123',
    __v: 0 } ]
*/