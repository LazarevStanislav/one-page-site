import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import arrow from '../img/h2_bg.png'
import pet from '../img/pet_item01.png'
import hdpe from '../img/hdpe_item02.png'
import pvc from '../img/pvc_item03.png'
import ldpe from '../img/ldpe_item04.png'
import pp from '../img/pp_item05.png'
import ps from '../img/ps_item06.png'
import pc from '../img/pc_item07.png'
import makulatura from '../img/makulatura_item08.png'
import orgsteklo from '../img/orgsteklo_item09.png'
import abs from '../img/abs_item10.png'


export default function WeBuy() {
  return (
    <Container>
      <Box sx={{mt: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography name='1' sx={{fontSize: '30px', fontWeight: '400', color: '#5c1c0b'}}>
        ЧТО МЫ ПОКУПАЕМ
        </Typography>
        <CardMedia 
          component="img"
          image={arrow}
          alt={ "arrow" }
          sx={{maxWidth: '250px', mt: '2rem'}}
        />
      </Box>
      <Box sx={ { mt: '4rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: '100' } }>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            src={pet}
            alt="pet"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            PET
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            src={hdpe}
            alt="hdpe"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            HDPE
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={pvc}
            alt="pvc"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            PVC
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={ldpe}
            alt="ldpe"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            LDPE
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={pp}
            alt="pp"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            PP
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={ps}
            alt="ps"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            PS
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={pc}
            alt="pc"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            PC
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={makulatura}
            alt="makulatura"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            Макулатура
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={orgsteklo}
            alt="orgsteklo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            Оргстекло
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ width: '230px', height: '270px', mb: '2rem' }}>
          <CardMedia
            component="img"
            image={abs}
            alt="abs"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', color: '#5c1c0b', fontSize: '30px', fontWeight: '400'}}>
            АБС
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Container>
  )
}
