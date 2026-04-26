import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [inputs, setInputs] = useState({
        username:"",
        password:""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    function handleInput(e){
        let inputName = e.target.name;
        let inputValue = e.target.value;
        setInputs(
            state => ({
                ...state, [inputName]:inputValue
            })
        )
    }
    function renderErrors(){
        if(errors!==""){
            return (
                <ul className="errors">
                    {Object.values(errors).map((value,index) =>{
                        return <li key={index}>
                            {value}
                        </li>
                    })}
                </ul>
            )
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        let errorsSubmit = {};
        let check = false;
        if(inputs.username===""){
            errorsSubmit.username = "Please enter your username";
            check = true;
        }

        if(inputs.password === ""){
            errorsSubmit.password = "Please enter your password";
            check = true;
        }

        if(check){
            setErrors(errorsSubmit);
        }else{
            setErrors({});
            const dataLogin = {
                username: inputs.username,
                password: inputs.password
            };
            let config = {
                headers: {
                    "Content-Type" : "application/json"
                }
            }
            axios.post("https://fakestoreapi.com/auth/login", dataLogin, config)
            .then(res => {
                console.log(res);
                localStorage.setItem("login", JSON.stringify(dataLogin));
                navigate('/');
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    return(
        <div className="login-form">
            <div className="title">
                <h3><i className="fa-solid fa-arrow-right-to-bracket"></i></h3>
                <h2>Welcome Back</h2>
                <p>Sign in to access your account</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Username</p>
                        <input onChange={handleInput} type="text" name="username"/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input onChange={handleInput} type="password" name="password"/>
                    </div>
                    {renderErrors()}
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}
export default Login;