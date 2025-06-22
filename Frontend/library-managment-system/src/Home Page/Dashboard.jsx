import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const Dashboard = () => {
    
    const [user, setUser] = useState([]);
    const[message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
       axios.get(`http://localhost:3000/data/user`, {withCredentials: true})
            .then ((res) => {
              setUser(res.data.user);
          }).catch ((err) => {
             setMessage(err.data.error);
        });
    }, [])

    const handleLogout = () => {
         axios.get(`http://localhost:3000/auth/logout`, {withCredentials: true})
            .then (() => {
                 navigate("/login");
 
        }).catch ((err) => {
          setMessage(err.data.error);
        });

    }

    

    return (
        <div className="bg-gray-800 min-h-screen text-white font-sans">
            <header className="flex justify-between bg-gray-700 p-4 shadow-md">
                <nav className="flex gap-6 tex-lg font-medium">
                    <Link to={`/Book_list`} className="hover:text-yellow-400 hover:underline transition duration-200">Books List</Link>
                    <Link to={`/Author_List`} className="hover:text-yellow-400 hover:underline transition duration-200">Authors List</Link>
                    <Link to={`/Member_List`} className="hover:text-yellow-400 hover:underline transition duration-200">Members List</Link>
                </nav>
                <div>
                   <Link to={handleLogout} className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition duration-200">Logout</Link>
                </div>

             </header>
             <main className="flex justify-center items-center mt-16 px-4">
                <div className="bg-gray-900 p-8 text-center rounded-lg shadow-2xl w-full max-w-xl">
                     <h2 className="text-2xl font-bold  mb-4">Welcome {user.username} to our Dashboard</h2>
                     {message && <p style={{color: 'red'}}>{message}</p>}
                </div>
             </main>
        </div>
    )
}

export default Dashboard