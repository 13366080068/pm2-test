const { spawn } = require('child_process')
const path = require('path')

const cp = spawn('node', ['write.js', 'a', 'b'], {
  cwd: path.resolve(__dirname, 'worker'),
  stdio: 'ignore', // 不管儿子的输入输出
  detached: true // 独立进程
})
// spawn 可以支持独立的 进程
cp.unref() // 断绝父子关系

process.kill(38925) // 有道云笔记的线程pid

cp.on('error', function (err) {
  console.log(err)
})
cp.on('close', function () {
  console.log('子进程关闭了')
})
cp.on('exit', function () {
  console.log('子进程退出了')
})
