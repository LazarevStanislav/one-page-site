import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import arrow from '../img/h2_bg.png'
import pet from '../img/pet_item01.png'

export default function WeBuy() {
  return (
    <>
      <Box sx={{mt: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography sx={{fontSize: '30px', fontWeight: '700', color: '#5c1c0b'}}>
        ЧТО МЫ ПОКУПАЕМ
        </Typography>
        <CardMedia 
          component="img"
          image={arrow}
          alt={ "arrow" }
          sx={{maxWidth: '250px', mt: '2rem'}}
        />
      </Box>
      <Box sx={{mt: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card sx={{ width: '215px', height: '270px' }}>
          <CardMedia
            component="img"
            image={pet}
            alt="pet"
            sx={{ lineHeight: 0 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '700'}}>
            PET
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}
