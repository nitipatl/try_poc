import { GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
   } from 'graphql'

import { Product } from './product_type'
import { CategoryType, LocaleType } from '../schema/category'
import { ProductAPI, CategoryAPI } from '../api'

export const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: 'Category',
    fields: {
      insertCategory: {
        type: new GraphQLList(CategoryType),
        args: {
          name: { type: GraphQLString },
          image: { type: GraphQLString },
          label: { type: LocaleType }
        },
        resolve: (source, args, { api: { categ ory } }: { api: { category: CategoryAPI } }) => {
          var re = category.insert(args)
          return re
        }
      },
      
    }
  }),
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      getProductList: {
        type: new GraphQLList(Product),
        args: {
          id: { type: GraphQLInt },
          page: { type: GraphQLInt },
          limit: { type: GraphQLInt }
        },
        resolve: (source, args, { api: { product } }: { api: { product: ProductAPI } }) => {
          var re = product.list(args)
          return re
        }
      },
      getCategoryList: {
        type: new GraphQLList(CategoryType),
        args: {
          id: { type: GraphQLInt },
          page: { type: GraphQLInt },
          limit: { type: GraphQLInt }
        },
        resolve: (source, args, { api: { category } }: { api: { category: CategoryAPI } }) => {
          var re = category.list(args)
          return re
        }
      },
    }
  })
})
