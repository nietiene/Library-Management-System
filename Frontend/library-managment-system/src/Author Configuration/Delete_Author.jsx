import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Delete_Author = () => {
    const { author_id } = useParams();
    const navigate = useNavigate();

    axios.delete(`http://localhost:3000/Delete_Author/${author_id}`)
    .then(() => {
        navigate('/Author_List');
    }).catch((err) => {
        console.log(err);
    });
}

export default Delete_Author