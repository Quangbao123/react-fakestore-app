import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem("user-info_fakestore")) || {});
  const userData = JSON.parse(localStorage.getItem("fakestore_login") || "{}");
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const userId = userData?.userId;
    if (!userId) return;
    axios
      .get(`https://fakestoreapi.com/users/${userId}`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        setInputs({
          firstname: data.name.firstname,
          lastname: data.name.lastname,
          email: data.email,
          phone: data.phone,
          city: data.address.city,
        });
        if(!localStorage.getItem("user-info_fakestore"))
          setUserProfile(localStorage.setItem("user-info_fakestore", JSON.stringify(data)));
      })
      .catch((err) => console.log(err));
  }, []);

  // FUNCTION CHECK VALID EMAIL
  const is_valid_email = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  function handleSubmit(e) {
    if (e?.preventDefault) e.preventDefault();
    let detectBug = false;
    let errorsSubmit = {};

    // CHECK FIRSTNAME
    if (inputs.firstname === "") {
      errorsSubmit.firstname = "Please enter firstname";
      detectBug = true;
    }

    // CHECK LASTNAME
    if (inputs.lastname === "") {
      errorsSubmit.lastname = "Please enter lastname";
      detectBug = true;
    }

    // CHECK EMAIL
    if (inputs.email === "") {
      errorsSubmit.email = "Please enter email";
      detectBug = true;
    } else if (!is_valid_email(inputs.email)) {
      errorsSubmit.email = "Invalid email";
      detectBug = true;
    }

    // CHECK PHONENUMBER
    if (inputs.phone === "") {
      errorsSubmit.phone = "Please enter phonenumber";
      detectBug = true;
    }

    // CHECK CITY
    if (inputs.city === "") {
      errorsSubmit.city = "Please enter city";
      detectBug = true;
    }
    console.log(detectBug);
    console.log(errorsSubmit);
    // HANLDE ERROR
    if (detectBug) {
      setErrors(errorsSubmit);
    } else {
      setErrors({});
      const updatedProfile = {
        ...userProfile,
        name: {
          ...userProfile.name,
          firstname: inputs.firstname,
          lastname: inputs.lastname,
        },
        email: inputs.email,
        phone: inputs.phone,
        address: {
          ...userProfile.address,
          city: inputs.city,
        },
      };
      setUserProfile(updatedProfile);
      localStorage.setItem("user-info_fakestore", JSON.stringify(updatedProfile));
      console.log("submit success");
      alert("Update success")
      setIsEditing(false);
    }
  }

  // FUNCTION HANDLE INPUT
  function handleInput(e) {
    let inpName = e.target.name;
    let inpValue = e.target.value;
    setInputs((state) => ({
      ...state,
      [inpName]: inpValue,
    }));
  }

  // RENDER INFO - BEFORE EDITING
  function renderInfo() {
    return (
      <>
        <div className="avatar-container">
          <p className="image">
            <i className="fa-solid fa-circle-user"></i>
          </p>
          <div className="avatar-info">
            <h2>
              {userProfile?.name?.firstname} {userProfile?.name?.lastname}
            </h2>
            <p>@{userProfile?.username}</p>
          </div>
        </div>
        <div className="email-container">
          <h2>
            <i className="fa-solid fa-envelope"></i>
          </h2>
          <div className="info">
            <p>Email</p>
            <p>{userProfile?.email}</p>
          </div>
        </div>
        <div className="phone-container">
          <h2>
            <i className="fa-solid fa-phone"></i>
          </h2>
          <div className="info">
            <p>Phone</p>
            <p>{userProfile?.phone}</p>
          </div>
        </div>
        <div className="password-container">
          <h2>
            <i className="fa-solid fa-key"></i>
          </h2>
          <div className="info">
            <p>Password</p>
            <p>{userProfile?.password}</p>
          </div>
        </div>
        <div className="address-container">
          <h2>
            <i className="fa-solid fa-location-dot"></i>
          </h2>
          <div className="info">
            <p>Address</p>
            <p>
              {userProfile?.address?.number} {userProfile?.address?.street},{" "}
              {userProfile?.address?.city} {userProfile?.address?.zipcode}{" "}
            </p>
          </div>
        </div>
      </>
    );
  }

  // RENDER INPUT - AFTER EDITING
  function renderInput() {
    return (
      <>
        <div className="avatar-container">
          <p className="image">
            <i className="fa-solid fa-circle-user"></i>
          </p>
          <div className="avatar-info">
            <h2>
              {userProfile?.name?.firstname} {userProfile?.name?.lastname}
            </h2>
            <p>@{userProfile?.username}</p>
          </div>
        </div>
        <div className="name-input">
          <div className="contain-info">
            <h2>First Name</h2>
            <input
              type="text"
              name="firstname"
              onChange={handleInput}
              value={inputs.firstname}
            />
            <small>{errors.firstname}</small>
          </div>
          <div className="contain-info">
            <h2>Last Name</h2>
            <input
              type="text"
              name="lastname"
              onChange={handleInput}
              value={inputs.lastname}
            />
            <small>{errors.lastname}</small>
          </div>
        </div>
        <div className="input">
          <div className="contain-info">
            <h2>Email</h2>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={inputs.email}
            />
            <small>{errors.email}</small>
          </div>
        </div>
        <div className="input">
          <div className="contain-info">
            <h2>Phone</h2>
            <input
              type="text"
              name="phone"
              onChange={handleInput}
              value={inputs.phone}
            />
            <small>{errors.phone}</small>
          </div>
        </div>
        <div className="input">
          <div className="contain-info">
            <h2>City</h2>
            <input
              type="text"
              name="city"
              onChange={handleInput}
              value={inputs.city}
            />
            <small>{errors.city}</small>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="profile">
      <div className="container">
        <h1 id="title">My Profile</h1>
        <div className="profile-detail">
          <form onSubmit={handleSubmit}>
            <div className="edit-btn">
                  {console.log("render:", isEditing ? "INPUT" : "INFO")}
              {isEditing ? renderInput() : renderInfo()}
              <button
                type="button"
                className="button_edit"
                onClick={isEditing ? handleSubmit : () => setIsEditing(true)}
              >
                {isEditing ? "Save change" : "Edit Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Profile;
