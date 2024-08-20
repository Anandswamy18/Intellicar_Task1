import axios from 'axios';


export const signup= async (userObj) =>{
    
    let response = await axios.post(
        "http://localhost:3000/api/v1/users/signup",
        userObj
       
        
    )

    console.log(response);
    
    return response;
    
}


export const login = async (user) => {
    let response = await axios.post(
        "http://localhost:3000/api/v1/users/signin",
        user
       
        
    );
    return response;

}




export const getUserDetails = async () => {
    try {
        const token = localStorage.getItem('token');
        let response = await axios.get(
            "http://localhost:3000/api/v1/users/getuserinfo",
            {
                headers: {
                    'Authorization': `Bearer ${token}`  
                }
            }
        );
        return response.data; 
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error;
    }
}