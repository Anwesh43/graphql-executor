const {createQuery} = require('./QueryBuilder')

const str = createQuery([{
    name : 'name',
    type : 'String'
}, {
    name : 'age',
    type : 'Int'
}, {
    name : 'id',
    type : 'Int'
}])

console.log(str)
