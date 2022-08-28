import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import CategoryService from "../../services/CategoryService";
import Navbar from "../Navbar";

const UpdateCategory = () => {
    const {id} = useParams();
    const [category, setCategory] = useState({
        id: id,
        name: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setCategory({...category, [e.target.name]: value});
    }

    const saveCategory = (e) => {
        e.preventDefault();
        CategoryService.saveCategory(category).then((response) => {
            console.log(response);
            navigate("/categoryList")
        }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <>
            <Navbar/>
            <div className="flex max-w-2xl mx-auto shadow border-b">
                <div className="px-8 py-8">
                    <div className="font-thin text-2xl tracking-wider">
                        <h1>Add New Category</h1>
                    </div>
                    <div className="items-center  justify-center h-14 w-full my-4">
                        <label className="block text-black text-sm font-normal">Category name</label>
                        <input type="text"
                               name="name"
                               value={category.name}
                               onChange={(e) => handleChange(e)}
                               className="h-10 w-96 border mt-2"></input>
                    </div>

                    <div className="items-center justify-center h-14 w-full my-6">
                        <button onClick={saveCategory}
                                className="rounded text-white font-semibold bg-black py-2 px-2 hover:bg-blue-700">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    );

};

export default UpdateCategory;