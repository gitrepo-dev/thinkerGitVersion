import express from "express"
import { graphqlHTTP } from "express-graphql"
import cors from "cors"
import { createConnection } from "typeorm"
import { schema } from './schema'
import {Users} from './entites/UserEntites'
import { Posts } from "./entites/PostEntites"

// configration
const app = express()
// parse the client data to send to the graphql server
app.use(express.json())
// use middleware by express
app.use(cors())
// created a port 5000 for localhost
const port = process.env.PORT || 5000
// connect with the mysql database
createConnection({
    type: "mysql",
    host: "us-cdbr-east-04.cleardb.com",
    database: "heroku_ed91beaa1c4ac5f",
    username: "b5f081799072c7",
    password: "d0dccece",
    logging: true,
    synchronize: true,
    entities: [Users, Posts]
})
// mysql://b5f081799072c7:d0dccece@us-cdbr-east-04.cleardb.com/heroku_ed91beaa1c4ac5f?reconnect=true

//  end point for api
app.use("/api", graphqlHTTP({
    schema,
    graphiql: true
}))

// server runing
app.listen(port, () => console.log(`server is running on port ${port} !!!`))