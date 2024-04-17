import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppBar, Container, Toolbar, Typography, Box, Stack, Avatar, IconButton, Badge, Menu, useMediaQuery } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart';

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const handleIsCart = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen((prev: boolean) => !prev);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setIsOpen(false);
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Container maxWidth='xl'>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant='h6'>{isSmallScreen ? 'LMS' : 'Learning Management System'}</Typography>
              </Box>
              <Box>
                <Stack direction='row' spacing={3}>
                  <IconButton
                    id="basic-button"
                    aria-controls={isOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isOpen ? 'true' : undefined}
                    onClick={handleIsCart}
                  >
                    <Badge badgeContent={4} color="error">
                      <ShoppingCartIcon sx={{ color: theme => theme.palette.common.white }} />
                    </Badge>
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={isOpen}
                    onClose={handleClose}
                  >
                    <Cart />
                  </Menu>
                  <Avatar alt="Remy Sharp" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
                </Stack>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ marginTop: 10 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default Navbar