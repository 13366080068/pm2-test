const cluster = require('cluster')
const cpus = require('os').cpus()

// 入口文件

cluster.setupMaster({ // setupMaster 用于修改默认的 'fork' 行为
  exec: require('path').resolve(__dirname, 'worker/cluster.js')
})

cluster.on('exit', function(worker) {
  console.log(worker.process.pid)
  cluster.fork() // 再开启个进程
})
for (let i = 0; i < cpus.length; i++) {
  cluster.fork()
}
// pm2 专门 开启 重启 直接采用集群的方式
// 模块