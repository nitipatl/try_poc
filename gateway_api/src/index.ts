import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'
import * as koaBody from 'koa-bodyparser'

import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import { schema } from './graphql'
import { HTTPProductAPI } from './api'

const port = Number.parseInt(process.env.PORT) || 9000

const app = new Koa()
const router = new KoaRouter()
const env = process.env.NODE_DEV || 'local'

const api = {
  product: new HTTPProductAPI()
}

const graphqlMiddleware = graphqlKoa((ctx) => ({
    schema,
    context: { api },
    rootValue: { request: ctx.req },
}))

router.post('/graphql', graphqlMiddleware);
router.get('/graphql', graphqlMiddleware);

router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port)
console.log(`api-gateway has been start on port ${port}`)
