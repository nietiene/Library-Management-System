import { Link } from "react-router-dom"

const Dashboard = () => {
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