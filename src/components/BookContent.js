import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Footer from './Footer';
import { FaBookOpen } from "react-icons/fa";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '1000px'
    },
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));


const BookContent = ({ bookDetails, index, parentIndex }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            {bookDetails.title === 'External links' ? <Footer title={bookDetails.title} content={bookDetails.content} /> : (
                <Card className={classes.root} >
                    <CardContent>
                        <div >
                            <Typography variant="h5" component="h2">
                                {parentIndex >= 0 ? `Inside Chapter : ${bookDetails.title} ` : `Chapter ${index + 1} : ${bookDetails.title}`} <FaBookOpen onClick={() => handleOpen()} style={{ pointer: 'cursor' }} />
                            </Typography>
                        </div>
                        <hr />
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 300,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.paper}>
                                    <Typography variant="body2" component="p" >
                                        {bookDetails.content}
                                    </Typography>
                                </div>
                            </Fade>
                        </Modal>
                    </CardContent>
                    <Grid className={classes.container}
                        container
                        alignItems='stretch'
                        spacing={3} style={{ backgroundColor: 'black', color: 'white', marginBottom: '10px' }}>
                        {bookDetails?.items?.map((book, index) => (
                            <Grid key={book.id} item xs>
                                <BookContent bookDetails={book} index={index} parentIndex={index} />
                            </Grid>
                        ))
                        }
                    </Grid>
                </Card>)}
        </div>
    )
}

export default BookContent
