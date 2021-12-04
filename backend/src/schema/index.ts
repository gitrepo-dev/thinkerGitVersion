import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_POST } from "./mutations/Post";
import { CREATE_USER, DELETE_USER, UPDATE_USER, USER_LOGIN } from "./mutations/Userdb";
import { GET_ALL_USERS } from "./queries/User";
import { GET_ALL_POSTS, GET_POST_BY_ID } from "./queries/Post";


// get set update etc.. the data from database using query
const rootQuery  = new GraphQLObjectType({
    name: "rootQuery",
    fields: {
        getAllUsers: GET_ALL_USERS,
        getAllPosts: GET_ALL_POSTS,
        getPostById: GET_POST_BY_ID,

        // login users
        loginUser: USER_LOGIN,
    },
})

const mutation  = new GraphQLObjectType({
    name: "mutation",
    fields: {
        // mutation for the users
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER,

        // mutaion for the posts
        createPost: CREATE_POST,
    },
})

export const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: mutation
})