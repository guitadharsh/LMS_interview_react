import React from 'react'
import { Box, Stack } from '@mui/system'
import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'

const SelectUser: React.FC = () => {
    return (
        <Box sx={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack spacing={3} sx={{ width: '30vw' }}>
                <Typography variant='h5'>Select a User for Mock Login</Typography>
                <FormControl fullWidth>
                    <InputLabel>Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Select User"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
        </Box>
    )
}

export default SelectUser