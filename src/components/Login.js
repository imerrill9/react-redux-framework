import React, { useState } from 'react'
import { Container, Typography, Button, Box, TextField } from '@mui/material'
import Toolbar from './general/Toolbar'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, clearUser } from '../redux/userSlice'

const AboutPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  const [formData, setFormData] = useState({
    name: '',
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setUser(formData))
  }

  const handleLogout = () => {
    dispatch(clearUser())
  }

  return (
    <>
      <Toolbar />
      <Container maxWidth='lg'>
        <Box sx={{ my: 4 }}>
          <Typography variant='h2' component='h1' gutterBottom>
            Global State Example
          </Typography>

          {/* User Authentication Form */}
          <Box sx={{ mb: 4 }}>
            <Typography variant='h5' component='h2' gutterBottom>
              {isAuthenticated ? 'User Profile' : 'Login'}
            </Typography>
            {isAuthenticated ? (
              <Box>
                <Typography variant='body1'>Welcome, {user.name}!</Typography>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleLogout}
                  sx={{ mt: 2 }}
                >
                  Logout
                </Button>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  margin='normal'
                  required
                />
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  sx={{ mt: 2 }}
                >
                  Login
                </Button>
              </form>
            )}
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default AboutPage
