const http = require('http')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${process.pid} died`)
        cluster.fork()
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('Hola mundo!')
    }).listen(8000)

    console.log(`Worker ${process.pid} started`)
} 
