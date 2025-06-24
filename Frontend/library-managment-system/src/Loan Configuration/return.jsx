import axios from "axios";
import { useState } from "react";


const Return_book = () => {
    const [book_id, setBook_id] = useState("");
    const [message, setMessage] = useState("");

const handleReturn = () => {
    if (!book_id) {
        setMessage("Please Enter some book_id");
        return;
    }
        axios.post(`http://localhost:3000/loan/return`, 
            { book_id },
            { withCredentials: true })
        .then((res) => {
            if (res.data.error) {
                setMessage(res.data.error)
            } else {
                  setMessage(res.data.message || "Book borrowed");
            }
        }).catch((err) => {
            console.error(err)
            setMessage(err.response?.data?.error || "Some thing went wrong"); 
        })

}   


    return (
        <div>
            <h3>Return a book</h3>

            <input type="text" name="Enter a Book code" 
            value={book_id} onChange={(e) => setBook_id(e.target.value)}
            placeholder="Enter book code"
            /> <br />

            <button onClick={handleReturn}>Return</button>

            {message && <p style={{color: 'green'}}>{message}</p>}
        </div>
    )
}

export default Return_book