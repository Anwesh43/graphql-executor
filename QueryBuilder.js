const createQuery = (fields) => {
      const fieldStr = fields.map(({name, type}) => `${name}:${type}`).join(", \n\t")
      return `type Query {\n\t${fieldStr}\n}`
}

module.exports = {createQuery}
