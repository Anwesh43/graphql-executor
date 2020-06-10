const {buildSchema, graphql} = require('graphql')
const {createRoot} = require('./RootBuilder')
const {createQuery} = require('./QueryBuilder')

const createGraph = (fields) => {
    const queryTypeStr = createQuery(fields)
    const schema = buildSchema(queryTypeStr)
    const root = createRoot(fields)
    return (query) => {
        return new Promise((resolve, reject) => {
            graphql(schema, query, root).then(resolve).catch(reject)
        })

    }
}

module.exports = {createGraph}
