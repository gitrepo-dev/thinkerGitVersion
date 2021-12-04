import {GraphQLObjectType, GraphQLID, GraphQLString} from 'graphql'

export const postType = new GraphQLObjectType({
    name: "Post",
    fields: ()=> ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        description: {type: GraphQLString},      
        image: {type: GraphQLString},
        timestamp: {type: GraphQLString},
        postedby: {type: GraphQLString}
    })
})