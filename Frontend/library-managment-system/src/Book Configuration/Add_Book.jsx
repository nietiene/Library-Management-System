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

    const handleAddNewBook = () => {
          const New_Book = axios.post(`http://localhost:3000/Add_New_Book/Add_New_Book`, 
                          {title, isbn, publisher, publication_year, copies_available, category})
                          .then((resp) => {
                                setMessage(resp.data.message);
                         })
                         .catch((err) => {
                               setError(err.data.error);
                         });

    }

  return (
    <div>
       <form onSubmit={handleAddNewBook} method="post">
        <label htmlFor="">Title</label>
        <input type="text" name="title" 
              onChange={(e) => setTitle(e.target.value)}/> <br />

        <label htmlFor="">Isbn</label>
        <input type="text" name="isbn" 
              onChange={(e) => setIsbn(e.target.value)}/> <br />

        <label htmlFor="">Publisher Name</label>
        <input type="text" name="publisher" 
           onChange={(e) => setPublisher(e.target.value)} /> <br />
        <label htmlFor="">Publication Year</label>
        <input type="text" name="publication_year" 
           onChange={(e) => setPublication_year(e.target.value)} /> <br />

        <label htmlFor="">Number of copies</label>
        <input type="text" name="copies_available" 
           onChange={(e) => setCopies_available(e.target.value)} /> <br />

        <label htmlFor="">Book Category</label>
        <input type="text" name="category" 
           onChange={(e) => setCategory(e.target.value)} /> <br />

       <button>Save Book</button>
       </form>
    </div>
  )      
}

export default Add_New_Book;