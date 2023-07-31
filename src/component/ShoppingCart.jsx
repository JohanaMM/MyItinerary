import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ShoppingCart.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { FaUserFriends, FaClock, FaGlobe, FaDollarSign, FaMoneyBillWave } from "react-icons/fa";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '98%',
        },
    },
}));

function ShoppingCart() {

    const { id } = useParams();
    console.log(id)

    const [itinerary, setItinerary] = useState(null);

    async function getCart(id) {
        const itineraryDB = await axios.get("https://mairenevillasmil-api-itineraries-crud.onrender.com/api/itineraries/" + id)
        setItinerary(itineraryDB.data.response)
    }

    useEffect(() => {
        getCart(id);
    }, []);
    console.log(id)
    const [openDataModal, setOpenDataModal] = React.useState(false);
    const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);

    const handleOpenDataModal = () => setOpenDataModal(true);
    const handleCloseDataModal = () => setOpenDataModal(false);

    const handleOpenConfirmationModal = () => setOpenConfirmationModal(true);
    const handleCloseConfirmationModal = () => setOpenConfirmationModal(false);
    const classes = useStyles();

    return (
        <>
            <Navbar />
            {itinerary ? (
                <div className='bodyCart'>
                    <div className='ditailsItinerary'>
                        <p>{itinerary.titleActivity}</p>
                        <div className='ditailsBody'>
                            <div className='ditailsImage'>
                                <img src={itinerary.imageItineraryA} className='imgCart' alt="" />
                            </div>
                            <div className='ditailsCart'>
                                <p><FaUserFriends size='20px' color='#3a0868' /> Ages {itinerary.years}, max 16 people per group</p>
                                <p><FaClock size='20px' color='#3a0868' /> {itinerary.time}</p>
                                <p><FaGlobe size='20px' color='#3a0868' /> {itinerary.language}</p>
                            </div>
                        </div>
                        <p>
                            <FaDollarSign size='20px' color='#3a0868' />
                            {Array.from({ length: itinerary.price }, (_, index) => (
                                <FaMoneyBillWave style={{ margin: '0 5px' }} size='20px' color='#3a0868' key={index} />
                            ))}
                        </p>
                        <Box
                            sx={{
                                height: '40px',
                                marginTop: 0,
                                marginRight: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '70%',
                                padding: '15px'
                            }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Box>
                        <div style={{
                            width: 'fit-content',
                            textAlign: 'center',
                            padding: '5px',
                            borderRadius: '15px',
                            backgroundColor: 'white',
                            marginTop: '20px',
                            marginLeft: '0%',
                            marginBottom:'15px'
                        }}>
                            <Button onClick={handleOpenDataModal} style={{
                                color: '#3a0868'
                            }}>Send data</Button>
                            <Modal
                                open={openDataModal}
                                onClose={handleCloseDataModal}
                                aria-labelledby="modal-modal-title2"
                                aria-describedby="modal-modal-description2"
                            >
                                <Box sx={style} >
                                    <Typography id="modal-modal-title2" variant="h6" component="h2" style={{
                                        color: '#3a0868'
                                    }}>
                                        We have sent the payment information to your email, you are getting closer to your trip!
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className='confirmation'>
                        <p className='confirmationP'>Payment confirmation</p>
                        <form className={classes.root} noValidate autoComplete="off">
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px', border: 'none' }} />
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px' }} />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TextField id="outlined-basic" label="Addres" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px' }} />
                                <TextField id="outlined-basic" label="City" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px' }} />
                            </div>
                            <TextField id="outlined-basic" label="Phone Number" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px' }} />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TextField id="outlined-basic" label="Confirmation Code" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px' }} />
                                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ backgroundColor: '#ffffff93', borderRadius: '15px' }} />
                            </div>
                        </form>
                        <div style={{
                            width: 'fit-content',
                            textAlign: 'center',
                            padding: '8px',
                            borderRadius: '15px',
                            backgroundColor: 'white',
                            marginTop: '20px',
                            marginLeft: '0%'
                        }}>
                            <Button onClick={handleOpenConfirmationModal} style={{
                                color: '#3a0868'
                            }}>Send confirmation</Button>
                            <Modal
                                open={openConfirmationModal}
                                onClose={handleCloseConfirmationModal}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{
                                        color: '#3a0868'
                                    }}>
                                        Congratulations! We have processed the payment, ready for your next adventure?
                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                </div >
            ) : (
                <div className='loadingCart'>
                    <p>Loading your order...</p>
                </div>
            )}
            <Footer />
        </>
    );
}

export default ShoppingCart