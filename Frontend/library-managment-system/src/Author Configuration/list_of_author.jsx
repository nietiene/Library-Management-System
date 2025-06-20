import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List_Of_Authors = () => {

    const [author, setAuthor] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/Author_List`)
        .then((res) => {
            setAuthor(res.data.data);
        }).catch((err) => {
            setError(err.data.error);
        });
    });

 <div>
    <table border={2}>
        <tr>
            <th>Author Code</th>
            <th>Author Name</th>
            <th>Biography</th>
            <th colSpan={2}>Modify</th>
        </tr>
        {author.map((author) => (
            <tr key={index}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.bio}</td>
            </tr>
        ))}
    </table>
 </div>
}