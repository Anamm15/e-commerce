import { useEffect, useState } from "react";
import Modal from "../../layouts/Modal";
import { getCategories } from "../../services/api/category";


const DashboardStore = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [storeId, setStoreId] = useState(0);
    const [photo, setPhoto] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await getCategories();
                if (response.status === 200) {
                    setCategories(response.data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleAddProduct = () => {
        const data = new FormData();
        data.append('name', name);
        data.append('description', description);
        data.append('price', String(price));
        data.append('stock', String(stock));
        data.append('categoryId', String(categoryId));
        data.append('storeId', String(storeId));
        data.append('photo', photo);
    }
    return (
        <>
            <div className="fixed z-50 bottom-4 right-4">
                <button 
                className="text-white bg-primary-2 transition-colors duration-300 py-2 w-52 font-semibold rounded-md text-lg hover:bg-primary-1"
                onClick={toggleModal}>
                    Tambah Produk
                </button>
            </div>
            
            {
                isModalOpen && (
                    <Modal onClick={toggleModal}>
                        <div>
                            <h4 className="text-3xl font-semibold text-center">Tambah Produk</h4>
                            <form encType="multipart/form-data" onSubmit={handleAddProduct}>
                                <div className="input__group flex flex-col gap-2 mt-4">
                                    <label htmlFor="name">Nama Produk</label>
                                    <input type="text" id="name" name="name" 
                                        className="border border-black py-2 rounded-md px-2.5" 
                                        placeholder="Masukkan nama produk"
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="input__group flex flex-col gap-2 mt-4">
                                    <label htmlFor="name">Deskripsi Produk</label>
                                    <textarea id="description" name="description" 
                                        className="border border-black py-2 rounded-md px-2.5" 
                                        placeholder="Masukkan deskripsi produk"
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="input__group flex flex-col gap-2 mt-4">
                                    <label htmlFor="price">Harga</label>
                                    <input type="number" id="price" name="price" 
                                        className="border border-black py-2 rounded-md px-2.5" 
                                        placeholder="Masukkan harga produk"
                                        onChange={(e) => setPrice(parseFloat(e.target.value))} />
                                </div>
                                <div className="input__group flex flex-col gap-2 mt-4">
                                    <label htmlFor="stock">Stok</label>
                                    <input type="number" id="stock" name="stock" 
                                        className="border border-black py-2 rounded-md px-2.5" 
                                        placeholder="Masukkan stok produk"
                                        onChange={(e) => setStock(parseInt(e.target.value))} />
                                </div>
                                <div className="input__group flex flex-col gap-2 mt-4">
                                    <label htmlFor="categoryId">Kategori</label>
                                    <select id="categoryId" name="categoryId"
                                        onChange={(e) => setCategoryId(parseInt(e.target.value))}
                                        className="border border-black py-2 rounded-md px-2.5">
                                        {
                                            categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.category + ' - ' + category.sub_category}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="input__group flex flex-col gap-2 mt-4">
                                    <label htmlFor="photo">Foto Produk</label>
                                    <input type="file" id="photo" name="photo" 
                                        className="border border-black py-2 rounded-md px-2.5" 
                                        onChange={(e) => setPhoto(e.target.value)} />
                                </div>
                                <button type="submit" 
                                    className="py-2 w-full bg-primary-1 mt-5 text-white font-semibold">
                                    Masuk
                                </button>
                            </form>
                        </div>
                    </Modal>
                )
            }
        </>
    )
}

export default DashboardStore;