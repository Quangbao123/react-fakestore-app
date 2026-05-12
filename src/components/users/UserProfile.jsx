import axios from "axios";
import { useEffect, useState } from "react";

function Profile(){
    const [userProfile, setUserProfile] = useState({});
    const userData = JSON.parse(localStorage.getItem("fakestore_login")) || {};

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${userData.userId}`)
        .then(res => {
            console.log(res);
            setUserProfile(res.data);
        })
        .catch(err => console.log(err));
    }, []);
    return(
        <div className="profile">
            <div className="container">
                <h1 id="title">My Profile</h1>
                <div className="profile-detail">
                    <form>
                        <div className="avatar-container">
                            <p className="image"><i className="fa-solid fa-circle-user"></i></p>
                            <div className="avatar-info">
                                <h2>{userProfile?.name?.firstname} {userProfile?.name?.lastname}</h2>
                                <p>@{userProfile?.username}</p>
                            </div>
                        </div>
                        <div className="email-container">
                            <h2><i className="fa-solid fa-envelope"></i></h2>
                            <div className="info">
                                <p>Email</p>
                                <p>{userProfile?.email}</p>
                            </div>
                        </div>
                        <div className="phone-container">
                            <h2><i className="fa-solid fa-phone"></i></h2>
                            <div className="info">
                                <p>Phone</p>
                                <p>{userProfile?.phone}</p>
                            </div>
                        </div>
                        <div className="password-container">
                            <h2><i className="fa-solid fa-key"></i></h2>
                            <div className="info">
                                <p>Password</p>
                                <p>{userProfile?.password}</p>
                            </div>
                        </div>
                        <div className="address-container">
                            <h2><i className="fa-solid fa-location-dot"></i></h2>
                            <div className="info">
                                <p>Address</p>
                                <p>{userProfile?.address?.number} {userProfile?.address?.street}, {userProfile?.address?.city}  {userProfile?.address?.zipcode} </p>
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