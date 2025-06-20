import { useState, useEffect } from "react";
import axios from "axios"

const Book_List = () => {
    const [ book, setBook ] = useState([]);
    const [ error, setError ] = useState(null);

  useEffect(() => {
   
       axios.get(`http://localhost:3000/Books_list`,)
       .then((res) => {
            setBook(res.data.bookList);
       }).catch((err) => {
        setError(err.data.error);
       })

    
  })

  return (
    <div>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <table border={2}>
        <tr>
          <th>Tittle</th>
          <th>Isbn</th>
          <th>Publisher</th>
          <th>Publication Year</th>
          <th>Number of Copies</th>
          <th>Category</th>
          <th>Modify</th>
        </tr>

       {book.map((book) => (
        <tr key={book.book_id}>
          <td>{book.title}</td>
          <td>{book.isbn}</td>
          <td>{book.publisher}</td>
          <td>{book.publication_year}</td>
          <td>{book.copies_available}</td>
          <td>{book.category}</td>
          <td><a href="">Update</a></td>
          <td><a href="">Delete</a></td>
        </tr>
       ))}
      </table>
    </div>
  )      
}

export default Book_List;