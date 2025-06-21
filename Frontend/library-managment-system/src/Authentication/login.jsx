import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/auth/login`, {
            username, password }, {withCredentials: true}).then ((res) => {
            if (res.data.user) {
                 navigate("/Dashboard");
            } else {
                setMessage(res.data.message);
            }
        }).catch ((err) => {
          setError(err.data.error);
        });
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input type="text" name="username" 
                  onChange={(e) => setUsername(e.target.value)}/> <br />

                <label>Password</label>
                <input type="password" name="password" 
                 onChange={(e) => setPassword(e.target.value)}
                /> <br />

                <button type="submit">Login</button>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {message && <p style={{color: 'red'}}>{message}</p>}
            </form>
        </div>
    )
}
export default Login