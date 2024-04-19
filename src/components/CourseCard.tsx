import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CourseProps } from '../types';
import { useGlobalData } from '../context/CartContext';
import { Alert, Snackbar } from '@mui/material';

const CourseCard: React.FC<CourseProps> = ({ data }) => {

  const { setCart } = useGlobalData()
  const [message, setMessage] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)


  const handleAddtoCart = () => {
    setCart((prev: any) => {
      
      if (prev.some((item: any) => item.data._id === data._id)) {
        setMessage('Item has already added')
        setIsOpen(true)
        return prev;
      }
      setMessage('Added to Cart')
      setIsOpen(true)
      return [...prev, { data }];
    });
  };



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data?.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data?.title}
        </Typography>
        <Typography variant="subtitle2" color="primary">
          {data?.createdBy?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {data?.price}/-
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Buy Now</Button> */}
        <Button size="small" variant='contained' onClick={() => handleAddtoCart()}>Add to cart</Button>
      </CardActions>

      <Snackbar open={isOpen} autoHideDuration={3000} onClose={() => setIsOpen(false)}>
        <Alert
          onClose={() => setIsOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Card>
  )
}

export default CourseCard