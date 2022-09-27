const yargs = require('yargs')
const args = yargs(process.argv.slice(2))
    .alias({
        m: "modo",
        p: "puerto",
        d: "debug"
    }).argv

  console.log(args)  
    

