import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart(){
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);
    const subtotal = carts.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    useEffect(() => {
        let userData = localStorage.getItem("login");
        const localCart = localStorage.getItem("cart");

        if(localCart){
            setCarts(JSON.parse(localCart));
            return;
        }
        if(userData){
            userData = JSON.parse(userData);
            axios.get("https://fakestoreapi.com/carts/user/" + userData.userId)
            .then( async (res) => {
                const latestCart = res.data.sort(
                    (a,b) => new Date(b.date) - new Date(a.date)
                )[0];

                const products = latestCart.products;

                const infoProduct = products.map(item => 
                    axios.get("https://fakestoreapi.com/products/" + item.productId)
                );

                const responses = await Promise.all(infoProduct);

                const fullData = responses.map((res, index) => ({
                    ...res.data,
                    quantity: products[index].quantity
                }));
                setCarts(fullData);
                localStorage.setItem("cart", JSON.stringify(fullData));
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [])

    function updateQuantity(id, type){
        setCarts(prev => {
            const updated = prev.map(item => {
                if(item.id === id){
                    let newQty = item.quantity;
                    if(type === "inc") newQty++;
                    if(type === "dec" && newQty > 1) newQty--;
                    else alert("Can't decrease the product quantity");
                    return { ...item, quantity: newQty };
                }
                return item;
            });
            localStorage.setItem("cart", JSON.stringify(updated));
            return updated;
        });
    }

    function removeItem(id){
        setCarts(prev => {
            const updated = prev.filter(item => item.id !== id);
            localStorage.setItem("cart", JSON.stringify(updated));
            return updated;
        })
    }
    function RenderCartData(){
        return carts.map(item => {
        return <div key={item.id} className="product-item">
                <img src={item.image} alt="anh"/>
                <div className="information">
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                        <ul className="quantity">
                            <li><button onClick={() => {
                                updateQuantity(item.id, "dec")
                            }}>-</button></li>
                            <li>{item.quantity}</li>
                            <li><button onClick={() => {
                                updateQuantity(item.id, "inc")
                            }}>+</button></li>
                        </ul>
                </div>
                <div className="total-delete">
                    <p className="trash" onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash"></i></p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        })
    }
    return(
        <div className="cart">
            <div className="con">
                {carts.length===0 ? (
                    <div className="zero-products">
                        <h2><i className="fa-solid fa-cart-arrow-down"></i></h2>
                        <h3>Your cart is empty</h3>
                        <p>Add some products to get started</p>
                        <button onClick={() => navigate('/')}>Browse Products</button>
                    </div> 
                ): 
                <>
                    <div className="cart-products">
                        <h2>Shopping Cart</h2>
                        <div className="cart-processing">
                            <div className="list-cart-products">
                                {RenderCartData()}
                            </div>
                            <div className="checkout">
                                <div className="top">
                                    <h3>Order Summary</h3>
                                    <div className="subtotal">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="shipping">
                                        <p>Shipping</p>
                                        <p>Free</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="total">
                                        <p>Total</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <button>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
                
            </div>
        </div>
    )
}
export default Cart;