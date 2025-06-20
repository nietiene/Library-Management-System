import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Update_Book = () => {
    const [title, setTitle] = useState("");
    const [ isbn, setIsbn ] = useState("");
    const [ publisher, setPublisher ] = useState("");
    const [ publication_year, setPublication_year ] = useState("");
    const [ copies_available, setCopies_available ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ error, setError ] = useState(null);

    const { book_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

      const handleFectchUser = () => {
        axios.get(`http://localhost:3000/Get_Sigle_Book/${book_id}`)
        .then((res) => {
            const book = res.data.Book_List[0];
            setTitle(book.title);
            setIsbn(book.isbn);
            setPublisher(book.publisher);
            setPublication_year(book.publication_year);
            setCopies_available(book.copies_available);
            setCategory(book.category);
        }).catch((err) => {
            setError(err.data.error);
        });
    }
   handleFectchUser(); 
});


  const handleUpdateBook = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/Update_Book/${book_id}`, {
        title, isbn, publisher, publication_year, copies_available, category
    })
    .then((res) => {
       setMessage(res.data.message);
       navigate('/Book_List');
    }).catch(() => {
        setError("Book Not updated");
    })
  }
 


   if (error) return <p>{error}</p>


    return (
        <div>
        <form onSubmit={handleUpdateBook}>
          <label>Title</label>
          <input type="text" name="title" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}/> <br />

          <label>Isbn</label>
          <input type="text" name="isbn" 
              onChange={(e) => setIsbn(e.target.value)}
              value={isbn}/> <br />

          <label>Publisher Name</label>
          <input type="text" name="publisher" 
           onChange={(e) => setPublisher(e.target.value)} 
           value={publisher}/> <br />

          <label>Publication Year</label>
          <input type="text" name="publication_year" 
           onChange={(e) => setPublication_year(e.target.value)} 
           value={publication_year}/> <br />

          <label>Number of copies</label>
          <input type="text" name="copies_available" 
           onChange={(e) => setCopies_available(e.target.value)} 
           value={copies_available}/> <br />

          <label>Book Category</label>
          <input type="text" name="category" 
           onChange={(e) => setCategory(e.target.value)} 
           value={category}/> <br />

          <button type="submit">Save Book</button>

       </form>
        </div>
    )
}

export default Update_Book