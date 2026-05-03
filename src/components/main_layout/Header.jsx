import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header(){
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        let userData = localStorage.getItem("login");
        if(userData){
            userData = JSON.parse(userData);
            setIsLogin(true);
        }
    },[]);
    function handleLogout(){
        setIsLogin(false);
        localStorage.removeItem("login");
    }
    return (
        <header>
            <div className="content">
                <div className="shop-name">
                    <h2><i className="fa-solid fa-box"></i> FakeStore</h2>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to='/' className="pro">Products</Link></li>
                        {isLogin ? (
                        <>
                            <li><Link to='/cart'><i className="fa-solid fa-cart-shopping"></i> </Link></li>
                            <li><Link to='profile'><i className="fa-regular fa-user"></i></Link></li>
                            <li><i className="fa-solid fa-bars"></i></li>
                        </>
                        ) : null}
                        <li><Link to="/login" onClick={handleLogout} className="login">{isLogin ? "Logout" : "Login"}</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;