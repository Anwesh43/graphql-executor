const {buildSchema, graphql} = require('graphql')

const schema = buildSchema(
    `
        type Query {
            hello : String,
            age : Int!
        }
    `
)

const root = {
    hello : () => {
        return "hello World"
    },
    age : () => {
        return 28
    }
}

graphql(schema, `{hello, age}`, root).then((response) => {
    console.log(JSON.stringify(response))
})
