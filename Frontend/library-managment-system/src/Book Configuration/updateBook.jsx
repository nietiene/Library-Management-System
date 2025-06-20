import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
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

    const handleFectchUser = () => {
        axios.get(`http://localhost:3000/Get_Sigle_Book/${book_id}`)
        .then((res) => {
            setTitle(res.Book_List.title);
            setIsbn(res.Book_List.isbn);
            setPublisher(res.Book_List.publisher);
            setPublication_year(res.Book_List.publication_year);
            setCopies_available(res.Book_List.copies_available);
            setCategory(res.Book_List.category);
        }).catch((err) => {
            setError(err.data.error);
        });
    }
}