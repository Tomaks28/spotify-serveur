import express from "express"
import cors from "cors"
import graphqlHTTP from 'express-graphql';

import { rootValue } from './root';
import { schema } from './schema';


const app = express();

app.use(cors());

// app.use((req, res, next) => {
//   console.log(req.body);
//   next()
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
)

app.listen(4000, () => {
  console.log('Running a GraphQL API server !');
});
