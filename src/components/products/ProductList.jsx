import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function ProductList(){
    const [products, setProducts] = useState([]);
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
        if(products.length>0){
            return products.map((item) => {
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
    }
    return (
        <div className="container">
            <div className="Title">
                <h1>Discover Products</h1>
                <p>Browse our collection of amazing products</p>
                <ul>
                    <li><i class="fa-solid fa-filter"></i></li>
                    <li className="detail">All</li>
                    <li className="detail">Men's Clothing</li>
                    <li className="detail">Jewelery</li>
                    <li className="detail">Electronics</li>
                    <li className="detail">Women's Clothing</li>
                </ul>
            </div>
            <div className="product-list">
                {renderData()}
            </div>
        </div>
        
    )
}
export default ProductList;