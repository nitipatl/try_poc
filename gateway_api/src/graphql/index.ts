import { GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
   } from 'graphql'

import { Product } from '../schema/product'
import { CategoryType, LocaleInput, CategoryInput } from '../schema/category'
import { ProductAPI, CategoryAPI } from '../api'

export const schema = new GraphQLSchema({
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
  }),
  mutation: new GraphQLObjectType({
    name: 'Category',
    fields: {
      insertCategory: {
        type: new GraphQLList(CategoryType),
        args: {
          input: {type: CategoryInput}
        },
        resolve: (source, args, { api: { category } }: { api: { category: CategoryAPI } }) => {
          var re = category.insert(args.input)
          return re
        }
      },
      updateCategory: {
        type: CategoryType,
        args: {
          id: {type: new GraphQLNonNull(GraphQLID)},
          input: {type: CategoryInput}
        },
        resolve: (source, args, { api: { category } }: { api: { category: CategoryAPI } }) => {
          var re = category.update(args.id, args.input)
          return re
        }
      }
    }
  })
})
