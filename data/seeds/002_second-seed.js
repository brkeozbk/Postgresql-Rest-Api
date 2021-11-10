const products = [
  {
    categoryId: 1,
    title: "Hertani Sızma Yağ",
    unitsInStock: "1000 mL",
    unitPrice: "20 TL",
    img : "https://cdn.getir.com/product/61153d848848062a83760e99_tr_1632215221032.jpeg"
  },
  
{
    title : "Cocacola",
    categoryId : 3,
    unitsInStock: "500 ml",
    unitPrice: "5 TL",
    img : "https://cdn.getir.com/product/5be3f1662201b20012a3a4d7_tr_1633010312312.jpeg"
},
{
    categoryId : 3,
    title : "Erikli İçme suyu",
    unitsInStock: "500 ml",
    unitPrice: "5 TL",
    img : "https://cdn.getir.com/product/5bb488f866a2c600121c4292_tr_1631537218158.jpeg"
},
{
    categoryId : 4,
    title : "muz",
    unitsInStock: "kg",
    unitPrice: "10 TL",
    img : "https://cdn.getir.com/product/5cac8d0b03c5fd0001497976_tr_1579677305629.jpeg"
},
{
    categoryId : 5,
    title : "Sİmit",
    unitsInStock: "300 gr",
    unitPrice: "5 TL",
    img : "https://cdn.getir.com/product/5f48f20af8295d94f0a366f9_tr_1599847822783.jpeg"
},
{
    categoryId : 2,
    title : "Nuhun Ankara Makarna",
    unitsInStock: "1000 gr",
    unitPrice: "5 TL",
    img : "https://cdn.getir.com/product/559fb113f462100c0046148f.jpeg"
}
];

exports.seed = function (knex) {
  return knex('products').del()
  .then(() => {
    return knex('products').insert(products)
  })
};