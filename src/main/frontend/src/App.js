import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import ProductList from "./components/products/ProductList";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import AddCategory from "./components/categories/AddCategory"
import CategoryList from "./components/categories/CategoryList";
import UpdateCategory from "./components/categories/UpdateCategory";
import HomePage from "./components/clients/HomePage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<ProductList />}/>
                    <Route path="/" element={<ProductList />}></Route>
                    <Route path="/productList" element={<ProductList />}/>
                    <Route path="/addProduct" element={<AddProduct />}/>
                    <Route path = "/editProduct/:id" element = {<UpdateProduct />} />
                    <Route path={"/addCategory"} element={<AddCategory />}></Route>
                    <Route path={"/categoryList"} element={<CategoryList />}></Route>
                    <Route path={"/editCategory/:id"} element={<UpdateCategory />}></Route>
                    <Route path={"/homePage"} element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>

        </>
        //<Navbar></Navbar>
    );
}

export default App;
