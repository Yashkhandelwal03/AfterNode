const getAllProductsStatic = async (req,res) =>{
    res.status(200).json({msg:'Got all static products'});
}

const getAllProducts = async (req,res) =>{
    res.status(200).json({msg:'Got all the products'});
} 

module.exports = { getAllProductsStatic,getAllProducts }