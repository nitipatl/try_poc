import { GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean } from 'graphql'

import { Product } from './product_type'
import { ProductAPI } from '../api'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      getProductList: {
        type: new GraphQLList(Product),
        args: {
          page: { type: GraphQLInt },
          limit: { type: GraphQLInt }
        },
        resolve: (source, args, { api: { product } }: { api: { product: ProductAPI } }) => {
          var re = product.list(args)
          return re
        }
      }
    }
  })
})
