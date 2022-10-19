import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import three from '../img/b07_bg.jpg'
import whiteArrow from '../img/heading-white.png'
import item1 from '../img/b07_item1.png'
import item2 from '../img/b07_item2.png'
import item3 from '../img/b07_item3.png'
import item4 from '../img/b07_item4.png'
import item5 from '../img/b07_item5.png'
import item6 from '../img/b07_item6.png'
import arrow1 from '../img/b07_arrow1.png'
import arrow2 from '../img/b07_arrow2.png'

export default function WeWorks() {
  return (
    <Card sx={ { backgroundImage: `url(${three})`, backgroundPosition: 'center',  maxWidth: '100%', height: '705px', mt: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant="h1" sx={{ color: '#fff', fontSize: '30px', fontWeight: '700', lineHeight: '40px', mt: '3rem', textAlign: 'center' }}>
      КАК МЫ РАБОТАЕМ
      </Typography>
      <Typography variant="h5" sx={{color: '#fff', fontSize: '16px', fontWeight: '300', mt: '2rem', textAlign: 'center' }}>
      5 простых шагов от звонка до вывоза сырья на переработку
      </Typography>
      <CardMedia 
        component="img"
        image={whiteArrow}
        alt={ "whiteArrow" }
        sx={{maxWidth: '250px', mt: '2rem', textAlign: 'center'}}
      />

      <Container sx={ { display: 'flex', justifyContent: 'center', mt: '3rem', height: '350px' } }>
        
        <Box sx={{display: 'flex', width: '360px', height: '158px', mr: '-13rem'}}>
          <CardMedia
            component="img"
            image={item1}
            alt=""
            sx={{width: '158px', height: '158px',}}
          />
          <CardContent>
            <Typography sx={{fontSize: '14px', mt: '2.2rem', color: '#fff', width: '170px'}}>
            Позвоните нам или оставьте заявку на сайте
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          image={arrow1}
          alt=""
          sx={{width: '70px', height: '60px', alignSelf: 'center', mr: '-13rem'}}
        />

        <Box sx={ { display: 'flex', width: '360px', height: '158px', alignSelf: 'flex-end'  } }>
          <CardContent>
            <Typography sx={{fontSize: '14px', mt: '2.5rem', color: '#fff', textAlign: 'right', width: '160px' }}>
          Наш менеджер уточнит все детали
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={item2}
            alt=""
            sx={{width: '158px', height: '158px',}}
          />
        </Box>

        <CardMedia
          component="img"
          image={arrow2}
          alt=""
          sx={{width: '70px', height: '60px', alignSelf: 'center'}}
        />

        <Box sx={{display: 'flex', width: '360px', height: '158px',}}>
          <CardMedia
            component="img"
            image={item3}
            alt=""
            sx={{width: '158px', height: '158px',}}
          />
          <CardContent>
            <Typography sx={{fontSize: '14px', mt: '2rem', color: '#fff', width: '202px'}}>
            Вы получите точный расчет стоимости вторсырья
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          image={arrow1}
          alt=""
          sx={ { width: '70px', height: '60px', alignSelf: 'center', ml: '-12.5rem'}}
        />

        <Box sx={ { display: 'flex', width: '360px', height: '158px', alignSelf: 'flex-end', ml: '-12rem',} }>
          <CardContent>
            <Typography sx={{fontSize: '14px', mt: '2rem', color: '#fff', textAlign: 'right', width: '150px' }}>
            Мы оговорим удобное время для выезда специалиста
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={item4}
            alt=""
            sx={{width: '158px', height: '158px'}}
          />
        </Box>

        <CardMedia
          component="img"
          image={arrow2}
          alt=""
          sx={{width: '70px', height: '60px', alignSelf: 'center', ml: '-0.5rem'}}
        />

        <Box sx={{display: 'flex', width: '360px', height: '158px',}}>
          <CardMedia
            component="img"
            image={item5}
            alt=""
            sx={{width: '158px', height: '158px',}}
          />
          <CardContent>
            <Typography sx={{fontSize: '14px', mt: '2rem', color: '#fff', width: '150px'}}>
            Мы сами вывезем сырье
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          image={arrow1}
          alt=""
          sx={{width: '70px', height: '60px', alignSelf: 'center', ml: '-12rem'}}
        />

        <Box sx={ { display: 'flex', width: '360px', height: '158px', alignSelf: 'flex-end', ml: '-16rem'  } }>
          <CardContent>
            <Typography sx={{fontSize: '14px', mt: '2.5rem', color: '#fff', textAlign: 'right', fontWeight: '700', width: '202px' }}>
            Деньги сразу!
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            image={item6}
            alt=""
            sx={{width: '158px', height: '158px',}}
          />
        </Box>

      </Container>
      
    </Card>
  )
}
