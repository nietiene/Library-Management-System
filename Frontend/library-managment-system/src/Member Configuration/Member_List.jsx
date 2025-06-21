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
            <Link to={`/Add_Member`}>Add New</Link>
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
                    <tr key={member.member_id}>
                       <td>{member.member_id}</td>
                       <td>{member.name}</td>
                       <td>{member.email}</td>
                       <td>{member.phone}</td>
                       <td>{member.address}</td>
                       <td>{member.membership_date}</td>
                       <td><Link to={`Update_Member/${member.member_id}`}>Update</Link></td>
                       <td><Link to={`Delete_Member/${member.member_id}`}>Delete</Link></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default MemberList