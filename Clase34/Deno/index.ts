
import {Application, Context } from "./devDepencies.ts"
import {router} from "./routes/index.ts"
const PORT = 8080;
const app = new Application()

app.use(router.routes())

app.use((ctx) =>{
    ctx.response.body = "App con Deno!"
})

app.listen({port: PORT})

console.log(`Server running on port ${PORT}`)


