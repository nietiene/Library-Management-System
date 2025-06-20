import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Update_Author = () => {
    const {name, setName} = useState("");
    const [bio, setBio] = useState("");
    const [error, setError] = useState(null);
    const {author_id} = useParams();

    axios.get(`http://localhost:3000/Author_List/${author_id}`)
    .then((res) => {
        const Author = res.data.Author[0];
        setName(Author.name);
        setBio(Author.bio);
    }).catch((err) => {
        setError(err.data.error);
    });
}