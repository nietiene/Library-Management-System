import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Delete_Member = () => {
    const { member_id } = useParams();
    const navigate = useNavigate();

    axios.delete(`http://localhost:3000/Delete_Member/${member_id}`)
    .then(() => {
        navigate('/Member_List');
    }).catch((err) => {
        console.log(err);
    });
}

export default Delete_Member