const path = require('path')
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const schema =  fileLoader(path.join(__dirname, './**/*.schema.*'))
const type =  fileLoader(path.join(__dirname, './**/*.type.*'))

const typeDefs = mergeTypes(schema.concat(type));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './**/*.resolver.*')));

export { typeDefs, resolvers } 