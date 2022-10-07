import { ButtonBase, Card, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import about from '../img/about_bg.jpg'
import pic1 from '../img/b04_item1.png'
import pic2 from '../img/b04_item2.png'
import pic3 from '../img/b04_item3.png'
import pic4 from '../img/b04_item4.png'


export default function About() {
  return (
    <>
      <Card name="#8" sx={ { backgroundImage: `url(${ about })`, backgroundPosition: 'center', width: '100%', height: '557px', mt: '3rem', display: 'flex', justifyContent: 'space-around', alignItems: 'center' } }>
        <Box sx={ { maxWidth: '500px' } }>
          <Box sx={{ height: '140px' }}>
            <Grid container spacing={5}>
              <Grid item>
                <ButtonBase sx={{ width: 80, height: 80 }}>
                  <CardMedia
                    component="img"
                    src={pic1}
                    alt="pic1"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={1} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography sx={{color: '#fff', fontSize: '24px'}}>7 лет опыта работы в переработке вторсырья</Typography>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ height: '140px' }}>
            <Grid container spacing={5}>
              <Grid item>
                <ButtonBase sx={{ width: 80, height: 80 }}>
                  <CardMedia
                    component="img"
                    src={pic2}
                    alt="pic2"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={10} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography sx={{color: '#fff', fontSize: '24px'}}>Более пятидесяти постоянных клиентов</Typography>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ height: '140px' }}>
            <Grid container spacing={5}>
              <Grid item>
                <ButtonBase sx={{ width: 80, height: 80 }}>
                  <CardMedia
                    component="img"
                    src={pic3}
                    alt="pic3"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography sx={{color: '#fff', fontSize: '24px'}}>40 единиц спецтехники в автопарке</Typography>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ height: '140px' }}>
            <Grid container spacing={5}>
              <Grid item>
                <ButtonBase sx={{ width: 80, height: 80 }}>
                  <CardMedia
                    component="img"
                    src={pic4}
                    alt="pic4"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography sx={{color: '#fff', fontSize: '24px'}}>Ответственный и дружелюбный коллектив</Typography>  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ml: '-22rem'}}>
          <Container sx={{border: '6px solid #fff', width: '650px', mr: '4rem'}}>
            <Typography sx={{color: '#fff', textAlign: 'center', fontWeight: 700, fontSize: '38px', mt: '2rem'}}>
            О КОМПАНИИ
            </Typography>
            <Typography sx={{color: '#fff', fontSize: '24px', width: '500px', mt: '2rem', ml: '5rem', mb: '2rem'}}>
            Наша компания Эко-Патруль специализируется на покупке вторсырья, его сортировке, прессовке и накоплению. Закупаемые материалы, отправляются на переработку и далее используются в качестве сырья при изготовлении новой продукции.
            </Typography>
          </Container>
        </Box>
      </Card>
    </>
  )
}

