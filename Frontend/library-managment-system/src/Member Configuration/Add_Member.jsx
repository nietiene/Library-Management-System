import axios from "axios";
import { useState } from "react";

const Add_Name = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [membership_date, setMembership_date] = useState("");

    const handleAddMember = () => {
        axios.post(``)
    }
}