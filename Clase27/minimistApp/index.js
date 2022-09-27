const parseArg = require('minimist')


const options = {
    alias: {
        m: "modo",
        p: "puerto",
        d: "debug"
    },
    default: {
        modo: "prod",
        puerto: 0,
        debug: false
    }
}
const objeto = parseArg(process.argv.slice(2), options)
objeto.otros = objeto._;
delete objeto._;

console.log(objeto)


