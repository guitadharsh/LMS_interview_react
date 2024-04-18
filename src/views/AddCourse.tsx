import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { CourseRegister } from '../types';

const AddCourse: React.FC = () => {
  
  const [formData, setFormData] = useState<CourseRegister>({
    title: '',
    description: '',
    price: '',
    duration: '',
    thumbnail: null,
  });

  const [errors, setErrors] = useState<CourseRegister>({
    title: '',
    description: '',
    price: '',
    duration: '',
    thumbnail: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFormData(prevData => ({
      ...prevData,
      thumbnail: file,
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      thumbnail: '',
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: CourseRegister = { ...errors };
    let hasError = false;

    Object.keys(formData).forEach(key => {
      if (!formData[key as keyof CourseRegister]) {
        newErrors[key as keyof CourseRegister] = 'Required';
        hasError = true;
      } else {
        newErrors[key as keyof CourseRegister] = '';
      }
    });

    setErrors(newErrors);

    if (!hasError) {
      console.log('Form data:', formData);
      // Proceed with form submission
    }
  };

  return (
    <Box sx={{ height: '80vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
      <Paper sx={{ height: 'auto', width: '80%' }}>
        <Grid container component="main">
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundImage: 'url(https://cdn.the-scientist.com/assets/articleNo/70676/aImg/48310/article-11-22-d2-careers-v1-ic-o.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px',
            }}
          />
          <Grid item xs={12} sm={6} component={Paper} elevation={1} square>
            <Box
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                Course Registration
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%', mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Title"
                  name="title"
                  autoFocus
                  size='small'
                  value={formData.title}
                  onChange={handleInputChange}
                  error={!!errors.title}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  size='small'
                  value={formData.description}
                  onChange={handleInputChange}
                  error={!!errors.description}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  type="text"
                  size='small'
                  value={formData.price}
                  onChange={handleInputChange}
                  error={!!errors.price}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="duration"
                  label="Duration"
                  type="text"
                  size='small'
                  value={formData.duration}
                  onChange={handleInputChange}
                  error={!!errors.duration}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="file"
                  name="thumbnail"
                  onChange={handleFileInputChange}
                  size='small'
                  error={!!errors.thumbnail}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3 }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AddCourse;
