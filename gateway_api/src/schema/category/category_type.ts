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

export const LocaleType = new GraphQLObjectType({
    name: 'Locale',
    description: 'Language',
    fields: {
        en: { type: GraphQLString },
        th: { type: GraphQLString },
        cn: { type: GraphQLString }
    }
})

export const CategoryType = new GraphQLObjectType({
    name: 'CatagoryType',
    fields: {
        name: { type: GraphQLString },
        image: { type: GraphQLString },
        label: { type: LocaleType }
    }
})
