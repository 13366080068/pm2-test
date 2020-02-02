
const http = require('http')
http.createServer((req, res) => {

  res.end(process.pid + ':' + 'end')
}).listen(3000)

// npm install pm2 -g
// 希望不占用命令行窗口 在后端来执行
// pm2 来代替nodemon

// start restart delete stop kill
// pm2-logs 定时清除