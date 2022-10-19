import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import arrow from '../img/h2_bg.png'
import img1 from '../img/b06_img1.jpg'
import img2 from '../img/b06_img2.jpg'
import img3 from '../img/b06_img3.jpg'
import img4 from '../img/b06_img4.jpg'

export default function Price () {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <Box sx={{mt: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography name='1' sx={{fontSize: '30px', fontWeight: '800', color: 'black'}}>
        ФАКТОРЫ, КОТОРЫЕ ВЛИЯЮТ НА СТОИМОСТЬ ВТОРСЫРЬЯ
        </Typography>
        <CardMedia 
          component="img"
          image={arrow}
          alt={ "arrow" }
          sx={{maxWidth: '250px', mt: '2rem', }}
        />
      </Box>

      <Box sx={ { mt: '4rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100', } }>
        
        <Card sx={{ maxWidth: '251px', maxHeight: '302px',  '--Grid-borderWidth': '2px', borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid', borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid', borderColor: '#3e9012', }}>
          <CardMedia
            component="img"
            image={img1}
            alt=""
            sx={{maxWidth: '251px', maxHeight: '198px',}}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', fontSize: '16px', mt: '1rem' }} variant="body2" color="text.secondary">
            Погрузка вторсырья в наш автомобиль Вашими силами
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: '251px', maxHeight: '302px',  '--Grid-borderWidth': '2px', borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid', borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid', borderColor: '#3e9012',
        } }>
          <CardContent>
            <Typography sx={{textAlign: 'center', fontSize: '16px', mt: '2rem' }} variant="body2" color="text.secondary">
            Чистота и влажность вторсырья
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={img2}
            alt=""
            sx={{maxWidth: '251px', maxHeight: '198px', mt: '1rem'}}
          />
        </Card>

        <Card sx={{ maxWidth: '251px', maxHeight: '302px',  '--Grid-borderWidth': '2px', borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid', borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid', borderColor: '#3e9012', }}>
          <CardMedia
            component="img"
            image={img3}
            alt=""
            sx={{maxWidth: '251px', maxHeight: '198px',}}
          />
          <CardContent>
            <Typography sx={{textAlign: 'center', fontSize: '16px'}} variant="body2" color="text.secondary">
            Дальность нахождения от МКАД (если вы находитесь не в Москве)
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: '251px', maxHeight: '302px',  '--Grid-borderWidth': '2px', borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid', borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid', borderColor: '#3e9012',
        } }>
          <CardContent>
            <Typography sx={{textAlign: 'center', fontSize: '16px', mt: '2rem' }} variant="body2" color="text.secondary">
            Объем сдаваемого сырья и его вес
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={img4}
            alt=""
            sx={{maxWidth: '251px', maxHeight: '198px', mt: '1rem'}}
          />
        </Card>
      </Box>
      <Typography name='2' sx={{mt: '2rem', textAlign: 'center', fontSize: '18px', fontWeight: '700', color: '#5c1c0b'}}>
      Если Вы привозите груз сами - цена значительно выше
      </Typography>
      <Typography name='2' sx={{textAlign: 'center', fontSize: '18px', fontWeight: '700', color: '#5c1c0b'}}>
      (на нашем складе есть весы)
      </Typography>
      <Typography name='2' sx={{mt: '1.5rem', textAlign: 'center', fontSize: '16px', fontWeight: '300', color: 'black'}}>
      Актуальную цену на сегодня уточняйте по телефону 8-925-467-26-55
      </Typography>
      <Box sx={{ textAlign: 'center'}}>
        <Button sx={{ width: 270, height: 50, color: 'white', fontWeight: 900, borderRadius: '27px', mt: '2rem', fontSize: '20px'}} variant="contained" onClick={handleClickOpen}>
          Узнать цену 
        </Button>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ textAlign: 'center'}}>{"Узнать цену"}</DialogTitle>
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
    </Container>
  )
}

