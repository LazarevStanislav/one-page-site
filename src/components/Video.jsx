import { Button, Card, CardActions, CardContent, CardMedia, FormControl, Input, InputLabel, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import './css/components.css';

export default function Video() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e4ebf3', height: '600px' }}>
        <Box>
          <iframe src='https://www.youtube.com/embed/GZAQGNM3rSM'></iframe>
          <div id='shadow'></div>
        </Box>
        <Box sx={{ width: 330, height: 430, backgroundColor: 'white', '--Grid-borderWidth': '1px', borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid', borderColor: 'black', borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid', ml: '6rem'} }>
          <Box sx={{mt:'1rem'}}>
            <Typography sx={{color: '#5c1c0b', fontSize: '18px', fontWeight: '700', textAlign: 'center'}}>ХОТИТЕ ВЫГОДНО</Typography>
            <Typography sx={{color: '#5c1c0b', fontSize: '18px', fontWeight: '700', textAlign: 'center'}}>СДАТЬ ВТОРСЫРЬЕ?</Typography>
            <Typography sx={ { textAlign: 'center', mt:'2rem' } }>Оставьте заявку</Typography>
          </Box>
          <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
            <TextField sx={{mt: '1rem'}} id="name" label="Имя" variant="outlined" />
            <TextField sx={{mt: '1rem'}} id="telephone" label="Телефон" variant="outlined" />
            <TextField sx={{mt: '1rem'}} id="Email" label="Email" variant="outlined" />
            <Button sx={ { width: 270, height: 50, color: 'white', fontWeight: 900, borderRadius: '18px', mt: '1rem', fontSize: '20px' } } variant="contained">Подать заявку</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
