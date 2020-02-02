let total = 0

for (let i = 0; i < 100*10000; i++) {
  total += i
}
process.stdout.write(''+'hello')
process.stdout.write(''+total)
// console.log(process.pid)
// console.log(total)
// process.stdin.write('儿子' + process.pid + ':' + total + '') // string

process.on('message', function (data) {
  console.log(data)
  process.send('I am son')
  // process.nextTick(() => {
  //   process.exit()
  // })
})
