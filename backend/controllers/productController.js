import { getProducts as getProductsFromService, getProduct as getProductFromService, addProduct as addProductFromService } from "../services/productService"


export const getProducts = async (req, res) => {
    try {
        const products = await getProductsFromService();

        if (!products || products.length === 0) {
            return res.sendStatus(404); 
        }

        const productsWithImageURLs = products.map((product) => ({
            ...product,
            image: product.image 
                ? `${req.protocol}://${req.get('host')}${product.image}`
                : null
        }));

        res.json(productsWithImageURLs); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const getProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductFromService(id);
        if (!product) res.sendStatus(404);
        const productWithImageURL = {
            ...product,
            image: product.image 
                ? `${req.protocol}://${req.get('host')}${product.image}`
                : null
        };

        res.json(productWithImageURL);
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
}

export const addProduct = async(req, res) => {
    try {
        const data = req.body;
        const imagePath = req.file ? `/uploads/products/img/${req.file.filename}` : null;
        data = { ...data, photo: imagePath };
        await addProductFromService(data);
        res.json({ message: "Data berhasil dibuat"});
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
}