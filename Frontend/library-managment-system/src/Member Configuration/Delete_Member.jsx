import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Delete_Author = () => {
    const { member_id } = useParams();
    const navigate = useNavigate();

    axios.delete(`http://localhost:3000/Delete_Author/${member_id}`)
    .then(() => {
        navigate('/Author_List');
    }).catch((err) => {
        console.log(err);
    });
}

export default Delete_Author