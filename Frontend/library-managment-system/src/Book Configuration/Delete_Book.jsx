import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete_Book = () => {

    const { book_id } = useParams();
    const navigate = useNavigate();
    const [ error, setError ] = useState(null);

    axios.delete(`http://localhost:3000/Delete_Book/${book_id}`)
    .then(() => {
         navigate('/');
    }).catch ((err) => {
        setError(err.data.error);
    });

   if(error) return <p style={{color: 'red'}}>{error}</p>
}

export default Delete_Book