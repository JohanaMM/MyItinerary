import React, { useState, useEffect } from 'react';
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
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import axios from 'axios';


function CardItinerary() {

  const [itineraries, setItineraries] = useState([])

  async function getDataI() {
    const itinerariesDB = await axios.get("http://localhost:4001/api/itineraries")
    setItineraries(itinerariesDB.data.response.itineraries)
    console.log(itinerariesDB)
  }

  useEffect(() => {
    getDataI();
  }, []);

  return (
    <>
      {itineraries.length > 0 ?
        <Card style={{
          width: '60%',
          maxHeight: '270px',
          margin: '20px'
        }}>
          <CardContent style={{
            height: '180px',
            backgroundImage: `url(${itineraries.imageItineraryA})`,
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
                <Avatar alt="Remy Sharp" src={itineraries.profileImage} />
              }
              titleTypographyProps={{
                color: 'white',
              }}
              subheaderTypographyProps={{
                color: 'white',
              }}
              title={itineraries.collaborator}
            />
          </CardContent>
          <div className='itemsCard'>
            <p>{itineraries.titleActivity}</p>
            <AccessTimeIcon /> {itineraries.time}
            <AttachMoneyIcon /> {itineraries.price}
            {itineraries.hashtag}
          </div>
          <div className='buttonItinerary'>
            <Checkbox
              icon={<FavoriteBorderIcon sx={{ color: 'red' }} />}
              checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
            />{itineraries.likes}
            <LinkRouter to="/Itineraries/cities/:idCity">
              <Button variant="contained" sx={{ backgroundColor: '#3c3e88', color: 'white' }}>Contained</Button>
            </LinkRouter>
          </div>
        </Card>
        :
        <h1> </h1>
      }

    </>

  );
}

export default CardItinerary