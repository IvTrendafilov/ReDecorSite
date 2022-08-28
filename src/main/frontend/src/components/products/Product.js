import React from "react";
import {useNavigate} from "react-router-dom";

const Product = ({products, deleteProduct}) => {
    const navigate = useNavigate();
    const editProduct = (e, id) => {
        e.preventDefault();
        navigate('/editProduct/'+ id);
    }
    return (
        <tr key={products.id}>
            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <div className={"text-sm text-black"}>{products.name}</div>
            </td>
            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <div className={"text-sm text-black"}>{products.category}</div>
            </td>
            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <div className={"text-sm text-black"}>{products.information}</div>
            </td>
            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <div className={"text-sm text-black"}>{products.price}</div>
            </td>
            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <div className={"text-sm text-black"}>{String(products.active)}</div>
            </td>

            <td className={"text-left px-6 py-4 whitespace-nowrap"}>
                <img style={{height:90}} src={products.image} />
            </td>
            <td className={"text-right px-6 py-4 whitespace-nowrap font-medium text-sm"}>
                <a onClick={(e, id) => editProduct(e, products.id)}
                   className={"hover:text-red-500 px-4 hover:cursor-pointer"}>Edit</a>
                <a onClick={(e, id) => deleteProduct(e, products.id)}
                   className={"hover:text-red-500 hover:cursor-pointer"}>Delete</a>

            </td>

        </tr>
    )
};

export default Product;