import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const MemberDasboard = () => {

    const [member, setMember] = useState(null);
    const [book, setBook] = useState([]);
    const [searchedValue, setSearchedValue] = useState([]);
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:3000/member/data/user`, {withCredentials: true})
        .then((res) => {
            setMember(res.data.memberInfo);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    // Available Books
useEffect(() => {
    axios.get(`http://localhost:3000/books/Book_List/available`, {withCredentials: true})
    .then((res) => {
        setBook(res.data.books);
    }).catch((err) => {
        console.log(err);
    });
}, [])

// Search book

useEffect(() => {
    const delaySearch = setTimeout(() => {
        if (query.trim() != "") {
           axios.get(`http://localhost:3000/books/search/new?query=${query}`, {withCredentials: true})
           .then((res) => {
                setSearchedValue(res.data.searchedBook);
          }).catch((err) => {
               console.log(err);
         });
        } else { 
            setSearchedValue([]);
        }
    }, 300);

return () => clearTimeout(delaySearch);


}, [query]);


    return (
        <div>
            {member ? (
                <>
                  <h2>Welcome {member.name} to member dashboard</h2>
      
                  <label>Search Book</label>
                  <input type="search" placeholder="Search book"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}/>

                  <h3>{searchedValue.length > 0 ? "Searched Book" : "Available books"}</h3>

                  {searchedValue.length === 0 && query != "" && (
                    <p>No book found for <strong>{query}</strong></p>
                  )}
                  <table border={2}>
                    <tr>
                        <th>Book Code</th>
                        <th>Book Title</th>
                        <th>Isbn</th>
                        <th>Publisher</th>
                        <th>Publication Year</th>
                        <th>Copies Available</th>
                        <th>Category</th>
                        <th colSpan={2}>Borrow | Return</th>
                    </tr>
                    <tbody>
                     {(searchedValue.length > 0 ? searchedValue : book).map((book) => (
                        <tr key={book.book_id}>
                            <td>{book.book_id}</td>
                            <td>{book.title}</td>
                            <td>{book.isbn}</td>
                            <td>{book.publisher}</td>
                            <td>{book.publication_year}</td>
                            <td>{book.copies_available}</td>
                            <td>{book.category}</td>
                            <td><Link>Borrow</Link></td>
                            <td><Link>Return</Link></td>
                        </tr>
                     ))}
                    </tbody>
                  </table>


                </>

            ) : (
                <>
                <h2>Loading......</h2>
                </>
            )}

        </div>
    )
}

export default MemberDasboard