import React from 'react'
import {
  AppBar,
  Toolbar as MuiToolbar,
  Typography,
  Button,
  Box,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../redux/userSlice'

const Toolbar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  const handleLogout = () => {
    dispatch(clearUser())
  }

  return (
    <AppBar position='static'>
      <MuiToolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Sample Framework
        </Typography>

        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body1' sx={{ mr: 2 }}>
              Welcome, {user.name}
            </Typography>
            <Button color='inherit' onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button color='inherit' component={RouterLink} to='/login'>
            Login
          </Button>
        )}
        <Button color='inherit' component={RouterLink} to='/'>
          Home
        </Button>
      </MuiToolbar>
    </AppBar>
  )
}

export default Toolbar
