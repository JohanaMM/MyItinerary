import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../styles/CardItinerary.css'
import imgCardActivity from '../images/hero.jpeg'
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';


 function RecipeReviewCard() {

  return (
    <Card style={{
      width: '300px',
      height: '310px',
    }}>
      <CardContent style={{
        height: '180px',
        backgroundImage: `url(${imgCardActivity})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        backgroundSize: 'cover',
      }}>
        <CardHeader
          sx={{
            height: '50px',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
          }}
          avatar={
            <Avatar alt="Remy Sharp" src={imgCardActivity} />
          }
          titleTypographyProps={{
            color: 'white',
          }}
          subheaderTypographyProps={{
            color: 'white',
          }}
          title="Activity"
          subheader="September 14, 2016"
        />
      </CardContent>
      <div className='itemsCard'>
        <p>TITLE</p>
        <AccessTimeIcon />
        <AttachMoneyIcon />
      </div>
      <div className='buttonItinerary'>
      <Checkbox
        icon={<FavoriteBorderIcon sx={{ color: 'red' }} />}
        checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
      />
        <LinkRouter to='/Itineraries' >
                <Button variant="contained" sx={{ backgroundColor: '#3c3e88', color: 'white' }}>Contained</Button>
        </LinkRouter>
      </div>
    </Card>
  );
}

export default RecipeReviewCard