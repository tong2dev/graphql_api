import Express from 'express'
import graphqlHTTP from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs,resolvers } from './api'

const app = Express()
const server = require('http').Server(app)
const port = 3000 
const schema = makeExecutableSchema({ typeDefs, resolvers })

app.use('/dev_api', graphqlHTTP(()=>{
    const startTime = Date.now();
    return {
      schema: schema,
      rootValue: global,
      graphiql: true,
      pretty:true,
      formatError: error => ({
        message: error.message,
      }),
      extensions() {
        return { runTime: Date.now() - startTime }
      }
    }
 }));

server.listen(port,()=>{
    console.log("Server running on : ",port)
});