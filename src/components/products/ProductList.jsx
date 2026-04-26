import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ProductList(){
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");
    const categories = [
        "All",
        "Men's Clothing",
        "Jewelery",
        "Electronics",
        "Women's Clothing"
    ]
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res =>{
            setProducts(res.data);
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    function renderData(){
        let filteredProduct = products;
        if(activeCategory !== "all"){
            filteredProduct = products.filter((item) => item.category === activeCategory);
        }
        return filteredProduct.map((item) => {
            return (
                <div className="single-product" key={item.id}>
                    <div className="img">
                        <img src={ item.image} alt="product"/>
                    </div>
                    <a href="/">{item.title}</a>
                    <div className="rating">
                        <p><FontAwesomeIcon icon={faStar} style={{color: "rgb(255, 212, 59)",}} /></p>
                        <p>{item.rating.rate}</p>
                        <p>({item.rating.count})</p>
                    </div>
                    <div className="price">
                        <p>${item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            )
        })
    }
    function handleFilter(){
        return categories.map((cate) => {
            return (
                <li key={cate} 
                    className={`detail ${activeCategory === cate.toLowerCase() ? "active" : ""}`}
                    onClick={() => setActiveCategory(cate.toLowerCase())}>
                    {cate}
                </li>
            )
        });
    }
    return (
        <div className="container">
            <div className="Title">
                <h1>Discover Products</h1>
                <p>Browse our collection of amazing products</p>
                <ul>
                    <li><i className="fa-solid fa-filter"></i></li>
                    {handleFilter()}
                </ul>
            </div>
            <div className="product-list">
                {renderData()}
            </div>
        </div>
        
    )
}
export default ProductList;