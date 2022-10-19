import styled from '@emotion/styled';
import { Button, Card, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Input, InputLabel, Select, Slide, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react'
import logo from '../img/logo.png'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Footer () {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      sx={{ mt: '3rem'}}>
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Img 
          src={logo}
        />
        <Box sx={{alignSelf: 'center'}}>
          <Button sx={{ width: 220, height: 50, color: 'white', backgroundColor: '#f9ab0f', fontWeight: 900, borderRadius: '27px' }} variant="contained" onClick={handleClickOpen}>
          Обратный звонок  
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle sx={{ textAlign: 'center'}}>{"Заказать обратный звонок"}</DialogTitle>
            <DialogContent sx={ { maxWidth: 260, maxHeight: 320, textAlign: 'center' } }>
              <TextField sx={{mt: '1rem'}} id="name" label="Имя" variant="outlined" />
              <TextField sx={{mt: '1rem'}} id="telephone" label="Телефон" variant="outlined" />
              <TextField sx={{mt: '1rem'}} id="Email" label="Email" variant="outlined" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отправить</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Typography sx={{fontWeight: 750, color: '#5c1c0b' }}>
          300784@inbox.ru
          </Typography>
          <Typography sx={{mt:'0.5rem', fontWeight: 750, color: '#5c1c0b' }} >
          8-925-467-26-55
          </Typography>
          <Typography sx={ { color: '#5c1c0b' } }>
            МО, Одинцовский район,
          </Typography>
          <Typography sx={ { color: '#5c1c0b' } }>
            Большие Вязёмы, Петровский проезд, вл7
          </Typography>
        </Box>
      </Grid>
    </Container>
  )
}
