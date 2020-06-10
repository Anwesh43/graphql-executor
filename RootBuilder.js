const createRoot = (fields) => {
    const rootObj = {}
    fields.forEach(({name, fn}) => {
        rootObj[name] = fn
    })
    return rootObj 
}

module.exports = {createRoot}
