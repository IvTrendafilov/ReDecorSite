import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import Category from "./Category";
import Navbar from "../Navbar";

const CategoryList = () => {
    const navigate = useNavigate();


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

    const deleteCategory = (e, id) => {
        e.preventDefault();
        CategoryService.deleteCategory(id).then((res) => {
            if (categories) {
                setCategories((prevElement) => {
                    return prevElement.filter((category) => category.id !== id)
                });
            }
        });
    };

    return (
        <>
            <Navbar/>
            <div className="container mx-auto my-6 ">
                <div className="h-12">
                    {/*         <button
                    onClick={() => navigate("/addProduct")}
                    className="rounded bg-black text-white px-6 py-2 font-semibold"> Add product
                </button>*/}
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
                            <th className={"text-right font-medium text-white uppercase tracking-wider py-3 px-6"}> Actions</th>

                        </tr>
                        </thead>
                        {!loading && (
                            <tbody className={"bg-white"}>
                            {categories.map((categories) => (
                                <Category categories={categories} deleteCategory={deleteCategory}
                                          key={categories.id}></Category>
                            ))}
                            </tbody>
                        )}

                    </table>
                </div>

            </div>
        </>
    );
};

export default CategoryList;