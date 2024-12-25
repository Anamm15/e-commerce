import { Products } from "../models/index.js"



export const getProducts = async(id) => {
    const products = await Products.findAll();
    return products;
}

export const getProduct = async(id) => {
    const product = await Products.findOne({ where: { id } });
    return product;
}

export const addProduct = async(data) => {
    return await Products.create({
        name: data.name, 
        description: data.description,
        price: parseFloat(data.price),
        stock: parseInt(data.stock),
        categoryId: data.categoryId, 
        storeId: data.storeId,
        photo: data.photo
    });
}

