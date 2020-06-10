const {createRoot} = require('./RootBuilder')
const rootObj = createRoot([
    {
        name : 'name',
        fn : () => "Anvil"
    },
    {
        name : "age",
        fn : () => 28
    },
    {
        name : "id",
        fn : () => 1
    }
])

console.log("root", rootObj)
