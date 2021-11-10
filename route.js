const router = require('express').Router()
const Categories = require('./model')
const Products = require('./model')

router.get('/', async (req, res) => {
    const categories = await Categories.findAll()
    res.json(categories)
})
router.get('/s', async (req, res) => {
    const products = await Products.findProduct()
    res.json(products)
})

module.exports = router