import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List_Of_Authors = () => {

    const [author, setAuthor] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/Author_List`)
        .then((res) => {
            setAuthor(res.data.Author);
        }).catch((err) => {
            setError(err.data.error);
        });
    });

 return (
  <div>
    <Link to={'/Add_Author'}>Add New</Link>
    <table border={2} cellPadding={5}>
        <tr>
            <th>Author Code</th>
            <th>Author Name</th>
            <th>Biography</th>
            <th colSpan={2}>Modify</th>
        </tr>
        {author.map((author) => (
            <tr key={author.author_id}>
                <td>{author.author_id}</td>
                <td>{author.name}</td>
                <td>{author.bio}</td>
                <td><Link to={`Update_Author/${author.author_id}`}>Update</Link></td>
                <td><Link to={`Delete_Author/${author.author_id}`}>Delete</Link></td>
            </tr>
        ))}
    </table>
 </div>
)
}

export default List_Of_Authors;