const {createGraph} = require('./GraphExecutor')

const fields = [
    {
        name : 'name',
        type : 'String',
        fn : () => "Anvil"
    },
    {
        name : "age",
        type : 'Int',
        fn : () => 28
    },
    {
        name : "id",
        type : 'Int',
        fn : () => 1
    }
]


const graphExecutor = createGraph(fields)

async function executeQuery(query) {
    try {
        const response = await graphExecutor('{name, age, id}')
        console.log(JSON.stringify(response))
        const d = await graphExecutor(`{name}`)
        console.log(JSON.stringify(d))
    } catch(e) {
        console.log(e)
    }

}

executeQuery(`{name, age, id}`)
