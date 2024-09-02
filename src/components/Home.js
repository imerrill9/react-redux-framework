import React from 'react'
import {
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  CardMedia,
  Box,
} from '@mui/material'
import { useGetQuoteQuery } from '../api/api'
import Toolbar from './general/Toolbar'

const HomePage = () => {
  const {
    data: quote,
    refetch,
    isFetching,
    isError,
  } = useGetQuoteQuery(null, {
    refetchOnMountOrArgChange: true,
  })

  const handleGetQuote = () => {
    refetch()
  }

  return (
    <>
      <Toolbar />
      <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '800px' }}>
          <Card
            sx={{
              height: '75vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component='img'
              sx={{
                objectFit: 'cover',
              }}
              image='https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTc4NDc4NDg3Nzc0MzMz/ron-swanson-from-parks-and-recreation.webp'
              alt='Ron Swanson from Parks and Recreation'
            />
            <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}>
              <Typography gutterBottom variant='h5' component='div'>
                Ron Swanson Quote
              </Typography>
              <Box>
                {isFetching && <Typography>Loading...</Typography>}
                {isError && (
                  <Typography color='error'>Error fetching quote</Typography>
                )}
                {quote && !isFetching && (
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{ wordWrap: 'break-word' }}
                  >
                    "{quote[0]}"
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button
              onClick={handleGetQuote}
              disabled={isFetching}
              variant='contained'
            >
              Get Quote
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HomePage
