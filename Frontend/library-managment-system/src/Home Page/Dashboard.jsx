import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
             <nav>
                    <Link to={`/Book_list`}>Books List</Link>
                    <Link to={`/Book_list`}>Authors List</Link>
                    <Link to={`/Book_list`}>Members List</Link>
             </nav>
            <h2>Welcome to our Dashboard</h2>
        </div>
    )
}

export default Dashboard