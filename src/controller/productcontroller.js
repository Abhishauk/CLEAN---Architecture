
module.exports = {
    createProduct: async (req , res) => {
        console.log("mmmmmm");
        try {
            
        const {productname , productprice , productquantity} = req.body;
        console.log(req.body);
            
        } catch (error) {
            
        }
    }
}


