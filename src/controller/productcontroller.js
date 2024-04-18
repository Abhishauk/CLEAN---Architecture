const Product = require('../db/model/Productmodel');

module.exports = {
    createProduct: async (req, res) => {
        console.log("mmmmmm");
        try {
            const { productname, productprice, productquantity } = req.body;
            console.log(req.body);

            const newProduct = new Product({
                productname: productname,
                productprice: productprice,
                productquantity: productquantity,
            });

            await newProduct.save();

            res.status(201).json({ message: 'Product created successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

};
