import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from 'graphql'


// response type
const responseType = new GraphQLObjectType({
    name: 'response',
    fields: ()=>({
        status: {type: GraphQLInt},
        message: {type: GraphQLString}
    })
})

// defiend type
export const userType = new GraphQLObjectType({
    name: "User",
    fields: ()=> ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        token: {type: GraphQLString},
        response: {type: responseType}
    })
})



