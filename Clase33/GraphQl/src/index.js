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