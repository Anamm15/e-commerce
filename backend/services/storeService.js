

export const getStores = async() => {
    return await Stores.findAll();
}

export const getStoreById = async(id) => {
    return await Stores.findByPk(id);
}

export const getStoreByUserId = async(id) => {
    return await Stores.findOne({ where: { userId: id }});
}

export const addStore = async(data) => {
    return await Stores.create(data);
}