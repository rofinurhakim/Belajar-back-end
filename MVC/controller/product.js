const Product = require('../models/product');
const path  = require('path')


exports.getviewProduct = (req, res, next) => {

    Product.fetchAll((data) => {
        res.sendFile(path.join(__dirname, 'views', 'products.html')); // render file html
        res.status(200).render('products', {data : data});
    });

   
//render ejs

};


exports.postAddProduct = (req, res, next) =>{
    console.log(req.body.title)
    const product = new Product(req.body); //new class Product model
    product.save(); //save method dari model
    // res.redirect('/')
    res.status(200).json({
        message: 'Data berhasil Ditambah',
        data : req.body.title
    })
};

exports.getProducts = (req, res, next) =>{
    
   Product.fetchAll((data) => {
        res.status(200).json({
            data: data
        })
    }); //method from model
    // console.log(products)
   
    // res.render('shop', {
    // prods: products,
    // pageTitle: 'Shop',
    // path: '/',
    // hasProducts: products.length > 0,
    // });
};