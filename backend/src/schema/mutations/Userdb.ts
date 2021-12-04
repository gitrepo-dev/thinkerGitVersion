import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../../entites/UserEntites";
import { userType } from "../typeDef/User";
import crypto from 'crypto'
const jwt = require('jsonwebtoken')
const env = require('../../enviroments/env.json')

// create user
export const CREATE_USER = {
    type: userType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_: string, args: any) {

        const { name, email, password } = args

        // if user already exists
        const user = await Users.findOne({ email })

        if (user) {
            return {
                response: {
                    status: 403,
                    message: "User already exists with this email !!!"
                }
            }
        } else {
                        
            // hashing password to check
            const hashPassword = await crypto.createHmac('sha256', env.SECRET_KEY).update(password).digest('hex');

            // generet token base on user email (jwt.sign method generat token)
            const token: String = await jwt.sign({ email: email }, env.JWT_TOKEN);

            // insert user in database
            await Users.insert({ name, email, password: hashPassword })
            return {
                name,
                email,
                token,
                response: {
                    status: 201,
                    message: "Successfully registered !!!"
                }
            }
        }
    }
}


// login user
export const USER_LOGIN = {
    type: userType,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(_: string, args: any) {

        //  destructuring vars
        const { email, password } = args

        // check user exists or not by email and password
        const user = await Users.findOne({ email })

        // hashing password to check
        const hashPassword = await crypto.createHmac('sha256', env.SECRET_KEY).update(password).digest('hex');

        if (!user || user && user.password !== hashPassword) {
            return {
                response: {
                    status: 404,
                    message: "User dose not exists or you entered wrong credential !!!"
                }
            }
        } else if (user && user.password === hashPassword) {

            // generet token base on user id (jwt.sign method generat token)
            const token = await jwt.sign({ id: user.id }, env.JWT_TOKEN);

            return {
                name: user.name,
                email,
                token,
                response: {
                    status: 200,
                    message: "Successfully logged in !!!"
                }
            }
        } else {
            return {
                response: {
                    status: 500,
                    message: "Something went wrong !!!"
                }
            }
        }
    }
}


// delete user
export const DELETE_USER = {
    type: userType,
    args: {
        id: { type: GraphQLID }
    },
    resolve(_: string, args: any) {
        const { id } = args
        Users.delete(id)
        return args
    }
}

// delete user
export const UPDATE_USER = {
    type: userType,
    args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    },
    resolve(_: string, args: any) {
        const { id, name } = args
        Users.update({ id }, { name })
        return args
    }
}