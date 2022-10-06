import { Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, Input, InputLabel, Select, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { forwardRef, useState } from 'react'
import logo from '../img/logo.png'



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TopHead () {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={3} sx={{ mt: '1rem' }}>
        <Card sx={{ maxWidth: 200, maxHeight: 73.59  }}>
          <CardMedia 
            component="img"
            image={logo}
            alt={"Logo"}
          />
        </Card>
        <div>
          <Button sx={{ maxWidth: 200, maxHeight: 73.59, mt:'2.5rem', ml:'25rem', color: 'white', backgroundColor: '#f9ab0f', fontWeight: 900, borderRadius: '27px' }} variant="contained" onClick={handleClickOpen}>
          Обратный звонок  
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
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
        </div>
        <Box sx={{ mt:'0rem', ml:'15rem' }}>
          <Typography sx={{fontWeight: 750 }}>
          info@eco-patrul.ru
          </Typography>
          <Typography sx={{mt:'0.5rem', ml:'1.5rem', fontWeight: 750 }} >
          8-925-467-26-55
          </Typography>
          <Typography sx={ { ml: '-2.7rem' } }>
            МО, Одинцовский район,
          </Typography>
          <Typography sx={ { ml: '-11rem' } }>
            Большие Вязёмы, Петровский проезд, вл7
          </Typography>
        </Box>
      </Grid>
    </div>
  )
}
