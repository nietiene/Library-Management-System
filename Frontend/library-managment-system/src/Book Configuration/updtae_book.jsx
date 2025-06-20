import { useState } from "react";
import axios from "axios"

const Add_New_Book = () => {

    const [ title, setTitle ] = useState("");
    const [ isbn, setIsbn ] = useState("");
    const [ publisher, setPublisher ] = useState("");
    const [ publication_year, setPublication_year ] = useState("");
    const [ copies_available, setCopies_available ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ error, setError ] = useState(null);

    const handleUpdateBook = (e) => {
   
       axios.get(`http://localhost:3000/`, )
                          .then((resp) => {
                                setMessage(resp.data.message);
                         })
                         .catch((err) => {
                               setError(err.data.error);
                         });

    }

  return (
    <div>
       <form onSubmit={handleUpdateBook}>
          <label>Title</label>
          <input type="text" name="title" 
              onChange={(e) => setTitle(e.target.value)}/> <br />

          <label>Isbn</label>
          <input type="text" name="isbn" 
              onChange={(e) => setIsbn(e.target.value)}/> <br />

          <label>Publisher Name</label>
          <input type="text" name="publisher" 
           onChange={(e) => setPublisher(e.target.value)} /> <br />

          <label>Publication Year</label>
          <input type="text" name="publication_year" 
           onChange={(e) => setPublication_year(e.target.value)} /> <br />

          <label>Number of copies</label>
          <input type="text" name="copies_available" 
           onChange={(e) => setCopies_available(e.target.value)} /> <br />

          <label>Book Category</label>
          <input type="text" name="category" 
           onChange={(e) => setCategory(e.target.value)} /> <br />

          <button type="submit">Save Book</button>

          {message && <p style={{color: 'green'}}>{message}</p>}
       </form>
    </div>
  )      
}

export default Add_New_Book;