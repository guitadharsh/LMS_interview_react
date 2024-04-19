import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, Stack } from '@mui/material'
import { CourseCard } from '../components'
import { courseServices } from '../services/course.service'
import { useGlobalData } from '../context/CartContext'


const ViewCourse: React.FC = () => {

  const { loggedInUser } = useGlobalData()
  const [data, setData] = useState([])

  useEffect(() => {
    let isMounted = true;

    courseServices.getAllCourses(loggedInUser?._id)
      .then((res: any) => {
        if (isMounted) {
          setData(res.data?.data);
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
    <Box sx={{ paddingTop: '20px', height: '100vh', overflow: 'auto' }}>
      <Typography variant='h5'>
        All Courses
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: '20px', marginBottom: '40px' }}>
        {data?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <CourseCard data={item} />
          </Grid>
        ))}

        {/* if 0 data */}
        {
          data?.length === 0 &&
          <Box sx={{ height: '60vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stack direction='row' spacing={2} alignItems='center'>
              {/* <ShoppingCartOutlinedIcon sx={{ fontSize: '30px' }} /> */}
              <Typography variant='subtitle1'>No courses available</Typography>
          </Stack>
      </Box>
        }
      </Grid>
    </Box>
  )
}

export default ViewCourse
