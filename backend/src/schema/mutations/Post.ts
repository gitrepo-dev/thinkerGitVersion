import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Posts } from "../../entites/PostEntites";
import { postType } from "../typeDef/Post";

// create user
export const CREATE_POST = {
    type: postType,
    args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        postedby: { type: GraphQLString },
    },
    async resolve(_: string, args: any) {
        const res = await Posts.insert(args)
        const respose = res.generatedMaps[0]
        return {...args, ...respose} 
    }
}


// delete user
// export const DELETE_USER = {
//     type: userType,
//     args:{
//         id: {type: GraphQLID}
//     },
//     resolve(_: string, args: any){        
//         const {id} = args
//         Users.delete(id)
//         return args
//     }
// }

// delete user
// export const UPDATE_USER = {
//     type: userType,
//     args:{
//         id: {type: GraphQLInt},
//         name: {type: GraphQLString}        
//     },
//     resolve(_: string, args: any){        
//         const {id, name} = args
//         Users.update({id}, {name})
//         return args
//     }
// }