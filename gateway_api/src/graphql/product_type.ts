import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLInterfaceType,
    GraphQLUnionType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean,
    GraphQLNonNull,
} from 'graphql'

export const Product = new GraphQLObjectType({
  name: 'Product',
  fields: {
    productName: { type: GraphQLString },
    shortDescription: { type: GraphQLString },
    longDescription: { type: GraphQLString },
    sku :  { type: GraphQLInt }
  }
})
