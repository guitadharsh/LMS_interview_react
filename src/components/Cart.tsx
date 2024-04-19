import React, { useState, useEffect } from 'react';
import { Box, useTheme, Typography, Container, Stack, Button } from '@mui/material';
import CartCard from './CartCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useGlobalData } from '../context/CartContext';
import { orderServices } from '../services/order.service';
import { Alert, Snackbar } from '@mui/material';

const Cart: React.FC = () => {

    const { cart, loggedInUser, setCart } = useGlobalData()
    const [grandTotal, setGrandTotal] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const theme = useTheme();

    //calculate grandtotal 
    useEffect(() => {
        let totalAmount = 0;
        cart.forEach((item: any) => {
            totalAmount += item.data.price;
        });
        setGrandTotal(totalAmount)
    }, [cart]);

    //handle checkout
    const handleCheckout = async () => {
        if (cart?.length > 0) {
            let courseIds = cart?.map((item: any) => item?.data?._id)

            let payload = {
                orderBy: loggedInUser?._id,
                courseIds: courseIds,
                grandTotal: grandTotal,
                isPaymentSuccesfull: true,
                paymentMode: 'string'
            }
            await orderServices.newOrder(payload)
                .then((res) => {
                    if (res) {
                        setIsOpen(true)
                        setCart([])
                        setMessage('Products checkout Succesfully')
                    }
                    else {
                        setIsOpen(true)
                        setMessage('Failed to order, Please try again')
                    }
                })
                .catch((err) => {
                    setIsOpen(true)
                    setMessage(err?.message)
                })
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '83vh',
            paddingTop: '6px',
            [theme.breakpoints.up('sm')]: {
                width: '100vw',
            },
            [theme.breakpoints.up('md')]: {
                width: '60vw',
            },
            [theme.breakpoints.up('lg')]: {
                width: '40vw',
            },
        }}>
            <Box sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant='h6' color='primary' sx={{ padding: 2, paddingTop: 0 }}>
                    Cart
                </Typography>
            </Box>

            <Container sx={{ flex: '1', overflow: 'auto', zIndex: 0 }}>
                <Stack spacing={3}>
                    {
                        cart?.map((item: any, index: number) => {
                            return (
                                <>
                                    <CartCard _id={item?.data?._id} title={item?.data?.title} description={item?.data?.description} duration={item?.data?.duration} price={item?.data?.price} thumbnail={item?.data?.thumbnail} owner={item?.data?.createdBy?.name} key={index} />
                                </>
                            )
                        })
                    }
                    {
                        cart?.length === 0 &&
                        <Box sx={{ height: '60vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Stack direction='row' spacing={2} alignItems='center'>
                                <ShoppingCartOutlinedIcon sx={{ fontSize: '30px' }} />
                                <Typography variant='subtitle1'>Empty Cart</Typography>
                            </Stack>
                        </Box>
                    }
                </Stack>
            </Container>

            <Box sx={{ flex: '0 0 auto', borderTop: '1px solid #ccc', py: 2 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={0}>
                        <Typography variant="body1" color="text.secondary" sx={{ marginRight: '5px' }}>
                            Grand Total:
                        </Typography>
                        <CurrencyRupeeIcon sx={{ fontSize: 'medium' }} />
                        <Typography variant="body1" color="text.primary">
                            {grandTotal} /-
                        </Typography>

                    </Stack>
                    <Button variant="contained" color="primary" onClick={handleCheckout}>
                        Checkout
                    </Button>
                </Stack>
            </Box>

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
        </Box>
    );
}

export default Cart;
