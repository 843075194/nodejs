


module.exports = function (date) {  
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    //YY-MM-DD HH:mm:ss

    return `${year}-${month}-${day}  ${hour}:${minutes}:${seconds}`
}