import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ProductService from "../../services/ProductService";
import Product from "./Product";
import Navbar from "../Navbar";


const ProductList = () => {
    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await ProductService.getProducts();
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteProduct = (e, id) => {
        e.preventDefault();
        ProductService.deleteProduct(id).then((res) => {
            if (products) {
                setProducts((prevElement) => {
                    return prevElement.filter((product) => product.id !== id)
                });
            }
        });
    };

    return (
        <>
            <Navbar/>
            <div className="container mx-auto my-6 ">
                <div className="h-12">
                    <button
                        onClick={() => navigate("/categoryList")}
                        style={{marginRight: 10}}
                        className="rounded bg-black text-white px-6 py-2 font-semibold"> Category List
                    </button>
                    <button
                        onClick={() => navigate("/addProduct")}
                        style={{marginRight: 10}}
                        className="rounded bg-black text-white px-6 py-2 font-semibold"> Add product
                    </button>
                    <button
                        onClick={() => navigate("/addCategory")}
                        className="rounded bg-black text-white px-6 py-2 font-semibold"> Add category
                    </button>
                </div>
                <div className="flex shadow border-b">
                    <table className={"min-w-full"}>
                        <thead className={"bg-black"}>
                        <tr>
                            <th className={"text-left font-medium text-white uppercase tracking-wider py-3 px-6"}> Name</th>
                            <th className={"text-left font-medium text-white uppercase tracking-wider py-3 px-6"}> Category</th>
                            <th className={"text-left font-medium text-white uppercase tracking-wider py-3 px-6"}> Information</th>
                            <th className={"text-left font-medium text-white uppercase tracking-wider py-3 px-6"}> Price</th>
                            <th className={"text-left font-medium text-white uppercase tracking-wider py-3 px-6"}> Active</th>
                            <th className={"text-left font-medium text-white uppercase tracking-wider py-3 px-6"}> Image</th>
                            <th className={"text-right font-medium text-white uppercase tracking-wider py-3 px-6"}> Actions</th>

                        </tr>
                        </thead>
                        {!loading && (

                            <tbody className={"bg-white"}>
                            {products.map((products) => (
                                <Product products={products} deleteProduct={deleteProduct} key={products.id}></Product>
                            ))}
                            </tbody>
                        )}

                    </table>
                </div>

            </div>
        </>
    );
};

export default ProductList;