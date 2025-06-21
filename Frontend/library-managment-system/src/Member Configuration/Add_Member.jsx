import axios from "axios";
import { useState } from "react";

const Add_Name = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [membership_date, setMembership_date] = useState("");
    const [message, setMessage]  = useState("");
    const [error, setError] = useState(null);

    const handleAddMember = () => {
        axios.post(`http://localhost:3000/Add_member`, {
            name, email, phone, address, membership_date
        })
        .then((res) => {
           setMessage(res.data.message);
        })
        .catch((err) => {
            setError(err.data.error);
        });
    }

    return (
        <div>
            <form onSubmit={handleAddMember}>
                <label>Name</label>
                <input type="text" name="name" 
                onChange={(e) => setName(e.target.value)}/> <br />

                <label>Email</label>
                <input type="email" name="email" 
                onChange={(e) => setEmail(e.target.value)}/> <br />

                <label>Phone Number</label>
                <input type="text" name="phone" 
                onChange={(e) => setPhone(e.target.value)}/> <br />

                <label>Address</label>
                <input type="text" name="address" 
                onChange={(e) => setAddress(e.target.value)}/> <br />

                <label>Membership Date</label>
                <input type="text" name="membership_date" 
                onChange={(e) => setMembership_date(e.target.value)}/> <br />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}