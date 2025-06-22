import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const MemberLogin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/member/Auth`, {
            name, email }, {withCredentials: true})
            .then ((res) => {
            if (res.data.memberInfo) {
                 navigate("/MemberDashboard");
            } else {
                setMessage(res.data.error);
            }
        }).catch ((err) => {
          setError(err.data.error);
        });
    }

    return (
        <div className="bg-gray-700 min-h-screen flex  justify-center items-center">
            <div className="bg-gray-500 max-w-md p-4 shadow-2xl rounded-xl">

            <form onSubmit={handleLogin} className="p-5">
                <h1 className="text-xl text-center font-bold text-gray-800 mb-5">Login to Library Managment System</h1>
                <label className="block text-md text-gray-800 font-bold mb-3">Username</label>
                <input type="text" name="name"
                  className="w-full py-2 rounded bg-gray-300 focus:ring-2 focus:ring-gray-600 focus:outline-gray-700 rounded-lg" 
                  onChange={(e) => setName(e.target.value)}/> <br />

                <label className="block text-md text-gray-800 font-bold mb-3">Email</label>
                <input type="email" name="email" 
                className="w-full py-2 rounded bg-gray-300 focus:ring-2 focus:ring-gray-600 focus:outline-gray-700 rounded-lg"
                 onChange={(e) => setEmail(e.target.value)}
                /> <br />

                <button type="submit" className="bg-gray-700 mt-5 w-[50%] py-2 rounded-lg text-white hover:bg-gray-600 transition duration-300 mb-3">Login</button> <br />
                <Link to={`/Login`} className="text-blue-800 font-bold hover:underline">Back to main login</Link>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {message && <p style={{color: 'red'}}>{message}</p>}
            </form>
            </div>
        </div>
    )
}
export default MemberLogin