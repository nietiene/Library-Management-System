import { useState } from "react";
import { Link } from "react-router-dom"

const Dashboard = () => {
    
    const [user, setUser] = useState([]);
    const[message, setMessage] = useState("");

    axios.get(`http://localhost:3000/data/user`, {withCredentials: true})
            .then ((res) => {
              setUser(res.data.user);
        }).catch ((err) => {
          setMessage(err.data.error);
        });
    return (
        <div>
             <nav>
                    <Link to={`/Book_list`}>Books List</Link>
                    <Link to={`/Author_List`}>Authors List</Link>
                    <Link to={`/Member_List`}>Members List</Link>
                    <Link to={`#`}>Logout</Link>
             </nav>
            <h2>Welcome {user.username} to our Dashboard</h2>
        </div>
    )
}

export default Dashboard