import { Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, InputLabel, Slide, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react'
import factory from '../img/b01_bg.jpg'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Main ()
{
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={ { backgroundImage: `url(${factory})`, backgroundPosition: 'center',  maxWidth: '100%', height: '557px'}}>
        <Typography variant="h1" sx={{ color: '#fff', fontSize: '52px', fontWeight: '700', lineHeight: '40px', mt: '8rem', textAlign: 'center' }}>
          КУПИМ ВТОРСЫРЬЕ ДОРОГО
        </Typography>
        <Typography variant="h5" sx={{color: '#fff', fontSize: '24px', fontWeight: '700', mt: '8rem', textAlign: 'center' }}>
        Покупаем и вывозим вторсырье:
        </Typography>
        <Typography variant="h5" sx={{color: '#fff', fontSize: '24px', fontWeight: '700', textAlign: 'center' }}>
        картон, полиэтилен, бумага, стрейч-пленка.
        </Typography>
        <Box sx={{ textAlign: 'center'}}>
          <Button sx={{ width: 370, height: 50, color: 'white', fontWeight: 900, borderRadius: '27px', mt: '4rem', fontSize: '20px'}} variant="contained" onClick={handleClickOpen}>
          Получить консультацию 
          </Button>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle sx={{ textAlign: 'center'}}>{"Получить консультацию"}</DialogTitle>
            <DialogContent sx={{ maxWidth: 260, maxHeight: 320, textAlign: 'center'}}>
              <TextField sx={{mt: '1rem'}} id="name" label="Имя" variant="outlined" />
              <TextField sx={{mt: '1rem'}} id="telephone" label="Телефон" variant="outlined" />
              <TextField sx={{mt: '1rem'}} id="Email" label="Email" variant="outlined" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отправить</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Card>
    </>
  )
}
