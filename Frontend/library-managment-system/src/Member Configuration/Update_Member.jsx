import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update_Member = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [membership_date, setMembership_date] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const member_id = useParams();

    useEffect(() => {
        const handleFetchUser = () => {
             axios.get(`http://localhost:3000/Get_Single_Member/${member_id}`)
             .then((res) => {
                const member = res.data.member[0];
                setName(member.name);
                setEmail(member.email);
                setAddress(member.address);
                setMembership_date(member.membership_date);
             }).catch((err) => {
                setError(err.data.error);
                setTimeout(() => {
                    setError(null);
                }, 3000);
             });
        }

        handleFetchUser();
    }, [member_id]);

    const handleUpdateMember = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/Update_Member/${member_id}`, {
        name, email, address, membership_date
    })
    .then((res) => {
       setMessage(res.data.message);
       navigate('/Member_List');
    }).catch(() => {
        setError("Member Not updated");
    })
    }


return (
    <div>
            <form onSubmit={handleUpdateMember}>
                <label>Name</label>
                <input type="text" name="name" 
                onChange={(e) => setName(e.target.value)}
                value={name}/> <br />

                <label>Email</label>
                <input type="email" name="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}/> <br />

                <label>Phone Number</label>
                <input type="text" name="phone" 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}/> <br />

                <label>Address</label>
                <input type="text" name="address" 
                onChange={(e) => setAddress(e.target.value)}
                value={address}/> <br />

                <label>Membership Date</label>
                <input type="date" name="membership_date" 
                onChange={(e) => setMembership_date(e.target.value)}
                value={membership_date}/> <br />
                
                {error && <p style={{color: 'red'}}>{error}</p>}
                {message && <p style={{color: 'green'}}>{message}</p>}
                <button type="submit">Create</button>
            </form>        
    </div>
)

}

export default Update_Member