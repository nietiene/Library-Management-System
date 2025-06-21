import { useState } from "react";
import { Link } from "react-router-dom"

const Dashboard = () => {
    
    const [user, setUser] = useState([]);
    const[message, setMessage] = useState("");
    
    axios.get(`http://localhost:3000/data/user`, {withCredentials: true})
            .then ((res) => {
            if (res.data.user) {
                 navigate("/Dashboard");
            } else {
                setMessage(res.data.error);
            }
        }).catch ((err) => {
          setError(err.data.error);
        });
    return (
        <div>
             <nav>
                    <Link to={`/Book_list`}>Books List</Link>
                    <Link to={`/Author_List`}>Authors List</Link>
                    <Link to={`/Member_List`}>Members List</Link>
                    <Link to={`#`}>Logout</Link>
             </nav>
            <h2>Welcome to our Dashboard</h2>
        </div>
    )
}

export default Dashboard