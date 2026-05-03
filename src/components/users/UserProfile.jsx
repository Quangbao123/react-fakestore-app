
function Profile(){

    return(
        <div className="profile">
            <div className="container">
                <h1 id="title">My Profile</h1>
                <div className="profile-detail">
                    <form>
                        <div className="avatar-container">
                            <p className="image"><i className="fa-solid fa-circle-user"></i></p>
                            <div className="avatar-info">
                                <h2>John doe</h2>
                                <p>@Johnd</p>
                            </div>
                        </div>
                        <div className="email-container">
                            <h2><i className="fa-solid fa-envelope"></i></h2>
                            <div className="info">
                                <p>Email</p>
                                <p>john@gmail.com</p>
                            </div>
                        </div>
                        <div className="phone-container">
                            <h2><i className="fa-solid fa-phone"></i></h2>
                            <div className="info">
                                <p>Phone</p>
                                <p>1-570-236-7033</p>
                            </div>
                        </div>
                        <div className="password-container">
                            <h2><i className="fa-solid fa-key"></i></h2>
                            <div className="info">
                                <p>Password</p>
                                <p>12345678</p>
                            </div>
                        </div>
                        <div className="address-container">
                            <h2><i className="fa-solid fa-location-dot"></i></h2>
                            <div className="info">
                                <p>Address</p>
                                <p>7682 new road, kilcoole 12926-3874</p>
                            </div>
                        </div>
                        <div className="edit-btn">
                            <button>Edit Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Profile;