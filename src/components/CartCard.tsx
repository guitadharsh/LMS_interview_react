import React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useGlobalData } from '../context/CartContext';
import { CartCardProps } from '../types';

const CartCard: React.FC<CartCardProps> = ({ _id, title, description, duration, price, thumbnail, owner }) => {

    const { setCart } = useGlobalData();

    const handleRemoveFromCart = (id: string) => {
        setCart((prev: any) => {
            const updatedCart = prev.filter((item: any) => item?.data._id !== id);
            return updatedCart;
        });
    };

    return (
        <Card
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Stack direction='row' spacing={2} alignItems="center">
                        <Box>
                            <Typography variant="subtitle1" color="text.secondary">
                                {description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {duration}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" color="primary">
                                {owner}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: "center" }}>
                                <CurrencyRupeeIcon sx={{ fontSize: 'small' }} />
                                <Typography variant="body2" color="text.secondary">{price} /-</Typography>
                            </Box>
                        </Box>
                    </Stack>

                </CardContent>
                <Tooltip title="Remove">
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'red'
                        }}
                        onClick={() => handleRemoveFromCart(_id)}
                    >
                        <DoDisturbOnOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={thumbnail}
                alt="Live from space album cover"
            />
        </Card>
    );
}

export default CartCard;
