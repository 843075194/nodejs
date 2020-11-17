var express = require("express");

var app = express();

app.use("/WWW", express.static("./WWW"));

app.get("/api/getMsg", function(req, res) {
    res.send({
        title: 0,
        data: ["张三", "李四", "王五", "赵六"]
    });
})

app.get("/api/houduanxuanran", function(req, res) {
    res.render("index.ejs", {
        data:  ["张&nbsp;三", "李四", "王五", "赵六"]
    })
})

app.listen(3000);