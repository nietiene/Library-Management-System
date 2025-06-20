import { useState } from "react";
import axios from "axios"

const Book_List = () => {
    
    const [ book, setBook ] = useState();
    const [ error, setError ] = useState(null);

    const handleUpdateBook = () => {
   
       axios.get(`http://localhost:3000/Books_list`,)
       .then((res) => {
            setBook(res.data.data);
       }).catch((err) => {
        setError(err.data.error);
       })

    }

  return (
    <div>
      <table border={2}>
        <tr>
          <th>Tittle</th>
          <th>Isbn</th>
          <th>Publisher</th>
          <th>Publication Year</th>
          <th>Number of Copies</th>
          <th>Category</th>
        </tr>

       {book.map((book) => (
        <tr>
          <td>{book.title}</td>
          <td>{book.title}</td>
          <td>{book.title}</td>
          <td>{book.title}</td>
          <td>{book.title}</td>
        </tr>
       ))}
      </table>
    </div>
  )      
}

export default Book_List;