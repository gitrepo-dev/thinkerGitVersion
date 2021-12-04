import { GraphQLList, GraphQLID, GraphQLInt } from "graphql";
import { Posts } from "../../entites/PostEntites";
import { postType } from "../typeDef/Post";


export const GET_ALL_POSTS = {
    type: new GraphQLList(postType),
    resolve() {
        return Posts.find()
    }
}


// get post by id
export const GET_POST_BY_ID = {
    type: postType,
    args: {
        id: { type: GraphQLID }
    },
    resolve(_: string, args: any) {
        const { id } = args
        const post = Posts.findOne(id)
        return post;
    }
}

