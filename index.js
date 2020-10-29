const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')

const {MONGODB} = require('./config.js')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')




const server = new ApolloServer({
  typeDefs,
  resolvers
})



mongoose
  .connect(MONGODB,{useNewUrlParser:true})
     .then(()=>{
       console.log('Mongo DB Connected')
       return server.listen({port:5000})
     })
     .then(res=>{
      console.log(`Сервер  запущен на ${res.url} `);
    })
    .catch(err=>{
      console.error(err);
    })


    