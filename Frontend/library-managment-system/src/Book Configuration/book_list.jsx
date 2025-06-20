import { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

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
      <Link to={'/Add_New_Book'}>Add Book</Link>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <table border={2}>
        <tr>
          <th>Book Code</th>
          <th>Tittle</th>
          <th>Isbn</th>
          <th>Publisher</th>
          <th>Publication Year</th>
          <th>Number of Copies</th>
          <th>Category</th>
          <th colSpan={2}>Modify</th>
        </tr>

       {book.map((book) => (
        <tr key={book.book_id}>
          <td>{book.book_id}</td>
          <td>{book.title}</td>
          <td>{book.isbn}</td>
          <td>{book.publisher}</td>
          <td>{book.publication_year}</td>
          <td>{book.copies_available}</td>
          <td>{book.category}</td>
          <td><Link to={`/UpdateBook/${book.book_id}`}>Update</Link></td>
          <td><Link to={`/Delete_Book/${book.book_id}`}>Delete</Link></td>
        </tr>
       ))}
      </table>
    </div>
  )      
}

export default Book_List