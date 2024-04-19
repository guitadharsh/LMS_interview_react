import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { userServices } from '../services/user.service';

interface User {
  id: number;
  name: string;
}

const SelectUser: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    let isMounted = true;
  
    userServices.getAllUsers()
      .then((res: any) => {
        if (isMounted) {
          console.log('response', res);
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
  

  return (
    <Box sx={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Stack spacing={3} sx={{ width: '30vw' }}>
        <Typography variant='h5'>Select a User for Mock Login</Typography>
        <FormControl fullWidth>
          <InputLabel>Select User</InputLabel>
          <Select
            // value={age}
            label="Select User"
          // onChange={handleChange}
          >
            {users.map(user => (
              <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default SelectUser;
