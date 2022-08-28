import React from "react";
import {useNavigate} from "react-router-dom";

const Category = ({categories, deleteCategory}) => {
    const navigate = useNavigate();
    const editCategory = (e, id) => {
        e.preventDefault();
        navigate('/editCategory/'+ id);
    }
    return (
        <tr key={categories.id}>
            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <div className={"text-sm text-black"}>{categories.name}</div>
            </td>
            <td className={"text-right px-6 py-4 whitespace-nowrap font-medium text-sm"}>
                <a onClick={(e, id) => editCategory(e, categories.id)}
                   className={"hover:text-red-500 px-4 hover:cursor-pointer"}>Edit</a>
                <a onClick={(e, id) => deleteCategory(e, categories.id)}
                   className={"hover:text-red-500 hover:cursor-pointer"}>Delete</a>
            </td>
        </tr>
    )
};

export default Category;