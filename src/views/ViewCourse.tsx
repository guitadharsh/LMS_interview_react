import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { CourseCard } from '../components'

const ViewCourse: React.FC = () => {
  return (
    <Box sx={{ paddingTop: '20px', height: '100vh', overflow: 'auto' }}>
      <Typography variant='h5'>
        All Courses
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: '20px', marginBottom: '40px' }}>
        {[...Array(16)].map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CourseCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ViewCourse
