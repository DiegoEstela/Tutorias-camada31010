
import {Application } from "./devDepencies"
import {router} from "./routes/index"
const PORT = 8080;
const app = new Application()

app.use(router.routes())

app.use((ctx) =>{
    ctx.response.body = "App con Deno!"
})

app.listen({port: PORT})

console.log(`Server running on port ${PORT}`)


