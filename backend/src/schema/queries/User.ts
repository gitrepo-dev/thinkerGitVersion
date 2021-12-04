import { GraphQLList } from "graphql";
import { Users } from "../../entites/UserEntites";
import { userType } from "../typeDef/User";


export const GET_ALL_USERS = {
    type: new GraphQLList(userType),
    resolve() {
        return Users.find()
    }
}