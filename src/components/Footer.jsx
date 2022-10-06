import { Button, Card, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Input, InputLabel, Select, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react'
import logo from '../img/logo.png'



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
        <Card>
          <CardMedia 
            component="img"
            image={logo}
            alt={"Logo"}
          />
        </Card>
        <Box sx={{alignSelf: 'center'}}>
          <Button sx={{ width: 200, height: 50, color: 'white', backgroundColor: '#f9ab0f', fontWeight: 900, borderRadius: '27px' }} variant="contained" onClick={handleClickOpen}>
          Обратный звонок  
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{"Заказать обратный звонок"}</DialogTitle>
            <DialogContent sx={{ maxWidth: 260, maxHeight: 320}}>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-textbox">Имя</InputLabel>
                <Input id="demo-customized-textbox" />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-textbox">Телефон</InputLabel>
                <Input id="demo-customized-textbox" />
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-textbox">Email</InputLabel>
                <Input id="demo-customized-textbox" />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Отправить</Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Typography sx={{fontWeight: 750, color: '#5c1c0b' }}>
          info@eco-patrul.ru
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
