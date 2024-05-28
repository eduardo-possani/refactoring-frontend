import { useEffect, useState, useCallback } from "react";
import API from "../utils/api";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Home() {
    const [users, setUsers] = useState([])

    const getUsers = useCallback(async () => {
        const { data } = await API.get('/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (data) {
            setUsers(data)
        }
    }, [])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <Box sx={{ mt: 8 }}>
            <Typography component="h1" variant="h5">
                Users
            </Typography>
            {users.map((user) => (
                <Typography key={user.id} variant="body1">
                    {user.email}
                </Typography>
            ))}
        </Box>
    );
}

export default Home;
