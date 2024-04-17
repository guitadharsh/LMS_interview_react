import React from 'react';
import { Box, useTheme, Typography, Container, Stack, Button } from '@mui/material';
import CartCard from './CartCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Cart: React.FC = () => {
    const theme = useTheme();

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
                width: '40vw',
            },
            [theme.breakpoints.up('lg')]: {
                width: '35vw',
            },
        }}>
            <Box sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                <Typography variant='h6' color='primary' sx={{ padding: 2, paddingTop: 0 }}>
                    Cart
                </Typography>
            </Box>

            <Container sx={{ flex: '1', overflow: 'auto', zIndex: 0 }}>
                <Stack spacing={3}>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
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
                            500 /-
                        </Typography>

                    </Stack>
                    <Button variant="contained" color="primary">
                        Checkout
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default Cart;
