import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MemberList = () => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/Member_List`)
        .then((res) => {
            setMember(res.data.Member);
        }).catch((err) => {
            console.log("Error", err);
        })
    }, [])

    return (
        <div>
            <table border={2} cellPadding={5}>
                <tr>
                    <th>Member Code</th>
                    <th>Member Name</th>
                    <th>Member Email</th>
                    <th>Member Phone</th>
                    <th>Member Address</th>
                    <th>Membership Date</th>
                    <th colSpan={2}>Modify</th>
                </tr>
                
                {member.map((member) => (
                    <tr key={member.id}>
                       <td>{member.id}</td>
                       <td>{member.name}</td>
                       <td>{member.email}</td>
                       <td>{member.phone}</td>
                       <td>{member.address}</td>
                       <td>{member.membership_date}</td>
                       <td><Link to={``}></Link></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default MemberList