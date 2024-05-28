import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

function UserList() {
  const [users, setUsers] = useState([])
    
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('/api/users') // Ajuste a URL da API conforme necessário
        setUsers(response.data)
      } catch (error) {
        console.error('Erro ao buscar usuários', error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        m: 10
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registered Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">
                  {new Date(user.registeredDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserList
