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

    getProducts: async (req , res) => {
         try {
            const getProducts = await Product.find();

            res.status(200).json({data:getProducts})
            
         } catch (error) {
            
         }
    },

    DeleteProducts: async(req , res) => {
        try {
            const { id } = req.params;
            console.log("22222222",id);
            await Product.findByIdAndDelete(id);

            res.status(201).json({ message: 'Product delete successfully'});
            
        } catch (error) {
            
        }
    },

    EditProducts: async(req , res) => {
        try {
            const { id } = req.params;
            console.log("111111111",id);
         

            res.status(201).json({ message: 'Product update successfully'});
            
        } catch (error) {
            
        }
    }
};
