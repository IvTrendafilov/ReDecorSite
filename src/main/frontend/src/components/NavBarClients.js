import React from "react";
import {useNavigate} from "react-router-dom";

const NavbarClients = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black">
            <div className="h-14 px-4 flex items-center">
                <p onClick={() => navigate("/productList")} className="text-white font-bold hover:cursor-pointer ">Product Management System</p>
                <p className={"text-white font-bold px-8"}> Поръчки</p>
            </div>
        </div>
    );
};

export default NavbarClients;