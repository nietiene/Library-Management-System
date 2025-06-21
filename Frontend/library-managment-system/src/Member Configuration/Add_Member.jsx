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
        .then(() => {

        })
    }
}