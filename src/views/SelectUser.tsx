import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { userServices } from '../services/user.service';
import { useNavigate } from 'react-router-dom';
import { useGlobalData } from '../context/CartContext';

interface User {
  _id: number;
  name: string;
  profilePicture: string
}

const SelectUser: React.FC = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState<string>('')

  const { setIsLoggedIn, setLoggedInUser } = useGlobalData()

  //api call for listing users
  useEffect(() => {
    let isMounted = true;

    userServices.getAllUsers()
      .then((res: any) => {
        if (isMounted) {
          setUsers(res.data?.data);
        }
      })
      .catch((error: any) => {
        console.error('Error fetching users:', error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  //drop down handle change
  const handleChange = (event: SelectChangeEvent<string>) => {
    if (event.target.value) {
      setUserName(event.target.value);
      navigate('/view-course')
      setIsLoggedIn(true)
      const user = users?.find((item) => item?._id.toString() === event.target.value);
      localStorage.setItem('isUserLoggedIn', 'true')
      setLoggedInUser(user)
    }
  };


  return (
    <Box sx={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack spacing={3} sx={{ width: '30vw' }}>
        <Typography variant='h5'>Select a User for Mock Login</Typography>
        <FormControl fullWidth>
          <InputLabel>Select User</InputLabel>
          <Select
            value={userName}
            label="Select User"
            onChange={handleChange}
          >
            {users.map(user => (
              <MenuItem key={user?._id} value={user?._id}>{user?.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default SelectUser;
