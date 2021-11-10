const db = require('./data/db-config');

const findAll = () => {
    return db('categories')
}
const findProduct = () => {
    return db('products')
}

module.exports = {
    findAll,
    findProduct
}