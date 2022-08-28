import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";
import Navbar from "../Navbar";

const UpdateProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        id: id,
        name: "",
        category: "",
        information: "",
        price: "",
        active: "",
        image: ""

    });

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await CategoryService.getCategories();
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    const handleChange = (e) => {
        let value;
        if (e.target.type === "checkbox") {
            value = e.target.checked
        } else {
            value = e.target.value;
        }
        setProduct({...product, [e.target.name]: value});
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProductService.getProductById(id);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        console.log(product);
        ProductService.updateProduct(product, id).then((response) => {
            navigate("/productList");
        })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <Navbar/>

            <div className="flex max-w-2xl mx-auto shadow border-b">
                <div className="px-8 py-8">
                    <div className="font-thin text-2xl tracking-wider">
                        <h1>Update product</h1>
                    </div>
                    <div className="items-center  justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Name of Product</label>
                        <input type="text"
                               name="name"
                               value={product.name}
                               onChange={(e) => handleChange(e)}
                               className="h-10 w-96 border mt-2"></input>
                    </div>
                    {/*<div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-black text-sm font-normal">Category</label>
                    <input type="text" name="category"
                           value={product.category}
                           onChange={(e) => handleChange(e)}
                           className="h-10 w-96 border mt-2"></input>
                </div>*/}
                    <div>
                        {!loading && (
                            <select style={{width: "auto", height: 45, backgroundColor: "transparent"}}
                                    className={"text-black"} name="category" value={product.category}
                                    onChange={(e) => handleChange(e)}>
                                {categories.map((categories) => (
                                    <option value={categories.name} label={categories.name}
                                            key={categories.id}></option>
                                ))}
                            </select>
                        )}

                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Information</label>
                        <input type="text" name="information"
                               value={product.information}
                               onChange={(e) => handleChange(e)}
                               className="h-10 w-96 border mt-2"></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Price</label>
                        <input type="number" name="price"
                               value={product.price}
                               onChange={(e) => handleChange(e)}
                               className="h-10 w-96 border mt-2"></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Active</label>
                        <input type="checkbox" name="active"
                               checked={product.active}
                               value={product.active}
                               onChange={(e) => handleChange(e)}
                               className="h-10 w-10 "></input>
                    </div>
                    <div style={{marginBottom: 60}} className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Image</label>
                        <img style={{height: 90}} src={product.image} alt={"Yes"}/>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Image Url</label>
                        <input type="text" name="image"
                               value={product.image}
                               onChange={(e) => handleChange(e)}
                               className="h-10 w-96 border mt-2"></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my">
                        <button onClick={updateProduct}
                                className="rounded text-white font-semibold bg-black py-2 px-2 hover:bg-blue-700">
                            Update
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UpdateProduct;