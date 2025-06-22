import axios from "axios";
import { useEffect, useState } from "react"

const MemberDasboard = () => {

    const [member, setMember] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:3000/data/user`, {withCredentials: true})
        .then((res) => {
            setMember(res.data.memberInfo);
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <div>
            <h2>Welcome {member.name} to member dashboard</h2>
        </div>
    )
}

export default MemberDasboard