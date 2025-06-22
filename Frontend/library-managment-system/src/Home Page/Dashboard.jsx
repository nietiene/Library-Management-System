import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";

const Dashboard = () => {
    
    const [user, setUser] = useState([]);
    const[message, setMessage] = useState("");

    useEffect(() => {
       axios.get(`http://localhost:3000/data/user`, {withCredentials: true})
            .then ((res) => {
              setUser(res.data.user);
          }).catch ((err) => {
             setMessage(err.data.error);
        });
    }, [])

    return (
        <div className="bg-gray-700 min-h-screen">
            <div className="flex justify-center bg-gray-500 p-4 shadow-2xl">
                <nav className="text-white">
                    <Link to={`/Book_list`}>Books List</Link>
                    <Link to={`/Author_List`}>Authors List</Link>
                    <Link to={`/Member_List`}>Members List</Link>
                    <Link to={`#`}>Logout</Link>
                </nav>
             </div>
             <div>
                   <h2 className="">Welcome {user.username} to our Dashboard</h2>
                   {message && <p style={{color: 'red'}}>{message}</p>}
             </div>

        </div>
    )
}

export default Dashboard