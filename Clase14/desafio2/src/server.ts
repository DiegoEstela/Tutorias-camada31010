import express from 'express';

import { Perimetro } from './lib/perimetro'
import { Superficie } from './lib/superficie'

const perimetro:Perimetro = new Perimetro()
const superficie:Superficie = new Superficie()

// Create a new express application instance
const app = express()

app.get('/perimetro/:figura/:param1/:param2?', (req, res) => {
  let { figura, param1, param2 } = req.params
  let resultado
  switch(figura) {
    case 'cuadrado' : 
      resultado = perimetro.cuadrado(Number(param1))
      break
    case 'rectangulo' : 
      resultado = perimetro.rectangulo(Number(param1),Number(param2))
      break    
    case 'circulo' : 
      resultado = perimetro.circulo(Number(param1))
      break
  }
  res.send({
    calculo: 'perimetro',
    figura,
    param1,
    param2,
    resultado
  })
})

app.get('/superficie/:figura/:param1/:param2?', (req, res) => {
  let { figura, param1, param2 } = req.params
  let resultado
  switch(figura) {
    case 'cuadrado' : 
      resultado = superficie.cuadrado(Number(param1))
      break
    case 'rectangulo' : 
      resultado = superficie.rectangulo(Number(param1),Number(param2))
      break    
    case 'circulo' : 
      resultado = superficie.circulo(Number(param1))
      break
  }
  res.send({
    calculo: 'superficie',
    figura,
    param1,
    param2,
    resultado
  })
})

const PORT:number = 8080
app.listen(PORT, () => {
  console.log(`Servidor express Typescript/Webpack en puerto ${PORT}`);
});

