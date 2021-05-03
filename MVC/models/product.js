// file system, ini buat kita bisa menggunakan fungsi file system di os
const fs = require('fs');
// path untuk library path / direktori
const path = require('path');

// let products = [
//     {
//         title: "Buku Baru banget 1"
//     },
//     {
//         title: "Buku Baru banget 2"
//     },
    
// ];

module.exports = class Product {
    constructor(book){
    this.id = book.id
    this.title = book.title
    this.price = book.price
    this.image = book.image
    this.description = book.description
    
    }

    save(){ //Untuk menyimpan data
        // products.push(this);


        //  path.join ->  untuk gabungin alamat direktori
        // process.mainModule.filename -> /Users/ariansyah/Documents/learn/mvc/bin/
        // parameter ke-2 -> data
        // parameter ke-3 -> nama file

        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        // /Users/ariansyah/Documents/learn/mvc/bin/data/products.json

        // disini kita manggil lib fs -> filesystem -> method readFile
        fs.readFile(p, (err, fileContent) => {

           let products = [];
            
           if(!err){
               products = JSON.parse(fileContent);
           }
           // console.log(products, "s")
           products.push(this);
           fs.writeFile(p, JSON.stringify(products), (err) => {
               console.log(err);
           })



})
    }
    
    static fetchAll(cb){ //untuk menampilkan semua data
        // return products;

        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
       fs.readFile(p, (err, fileContent) => {
        //    console.log(JSON.parse(fileContent))
        //    console.log(cb)
           if(err){
              return cb(['kosong bro']); 
            }
            return cb(JSON.parse(fileContent));
       })
    }
}