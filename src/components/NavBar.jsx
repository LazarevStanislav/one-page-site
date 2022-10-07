import { AppBar, Button, Grid, ListSubheader, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function NavBar ()
{
  return (
    <ListSubheader sx={{backgroundColor: '#468f1f', width: '100%'}}>
      <Box sx={ { display: 'flex', justifyContent: 'space-around', ml: 'auto', mr: 'auto', mt: '1rem', maxWidth: '80rem', minHeight: '3rem'}}>
        <Button href='#1' sx={{color: '#ffffff', fontWeight: 900}}>Что мы покупаем</Button>
        <Button href='#8'sx={{color: '#ffffff', fontWeight: 900}}>О компании</Button>
        <Button sx={{color: '#ffffff', fontWeight: 900}}>Стоимость</Button>
        <Button sx={{color: '#ffffff', fontWeight: 900}}>Как мы работаем</Button>
        <Button sx={{color: '#ffffff', fontWeight: 900}}>Почему мы</Button>
        <Button sx={{color: '#ffffff', fontWeight: 900}}>Контакты</Button>
      </Box>
    </ListSubheader>
  )
}
