import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CourseProps } from '../types';

const CourseCard: React.FC<CourseProps> = ({ data }) => {
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
        <Button size="small" variant='contained'>Add to cart</Button>
      </CardActions>
    </Card>
  )
}

export default CourseCard