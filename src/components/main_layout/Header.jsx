import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <div className="content">
                <div className="shop-name">
                    <h2><i className="fa-solid fa-box"></i> FakeStore</h2>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to='/'>Products</Link></li>
                        <li><i className="fa-solid fa-cart-shopping"></i></li>
                        <li><i className="fa-regular fa-user"></i></li>
                        <li><i className="fa-solid fa-bars"></i></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
export default Header;