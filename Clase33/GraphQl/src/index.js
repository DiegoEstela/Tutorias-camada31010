const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// schema

const schema = buildSchema(`

    type Cliente {
        id: Int,
        nombre: String,
        telefono: String,
    }

    type Query {
        clientes: [Cliente]
        cliente(id:Int): Cliente
    }

    type Mutation {
        addClient(nombre: String, telefono: String): Cliente
    }
`);

let clientes = [];
let counter = 1;

const root = {
  clientes: () => {
    return clientes;
  },
  cliente: ({ id }) => {
    return clientes.find((cliente) => cliente.id === id);
  },
  addClient: (data) => {
    const newClient = {
      id: counter,
      nombre: data.nombre,
      telefono: data.telefono,
    };
    clientes.push(newClient);
    counter++;
    return newClient;
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});