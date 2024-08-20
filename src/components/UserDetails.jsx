import { useEffect, useState } from 'react';
import { getUserDetails } from '../services/UserServices';
import "./UserDetails.css";

export default function UserDetails() {
    const [userDetails, setUserDetails] = useState({
        username: '',
        mobile: '',
        gender: '',
        email: '',
        age: ''
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await getUserDetails();
                console.log(response);
                const data = response.data;
                setUserDetails(data);
            } catch (error) {
                console.error("Failed to fetch user details", error);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <>
            <center>
                <div className="header">User Details</div>
                <table border="" className="table-blk">
                    <tbody>
                        <tr>
                            <td className="table-data">Username</td>
                            <td className="table-data">{userDetails.username}</td>
                        </tr>
                        <tr>
                            <td className="table-data">Mobile No</td>
                            <td className="table-data">{userDetails.mobile}</td>
                        </tr>
                        <tr>
                            <td className="table-data">Gender</td>
                            <td className="table-data">{userDetails.gender}</td>
                        </tr>
                        <tr>
                            <td className="table-data">Email Id</td>
                            <td className="table-data">{userDetails.email}</td>
                        </tr>
                        <tr>
                            <td className="table-data">Age</td>
                            <td className="table-data">{userDetails.age}</td>
                        </tr>
                    </tbody>
                </table>
            </center>
        </>
    );
}
