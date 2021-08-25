import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Card, CardMedia, Grid, CircularProgress, makeStyles } from '@material-ui/core'
import book from '../../images/book.jpg';
import BookContent from '../../components/BookContent';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        }
    }
}));

export default function BookDetails() {
    const [bookDetails, setBookDetails] = useState([]);
    const { pathname } = useLocation();
    const classes = useStyles();
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = "Bearer Monomi2021";
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )

    const getBooks = useCallback(
        async (bookId) => {
            try {
                const result = await axios.get(`https://assignment.api.staging.monomi.lt/v1/books${pathname}`);
                setBookDetails(result.data.data);
            } catch (error) {
                console.log(error);
            }
        }, [pathname]
    )

    useEffect(() => {
        getBooks();
    }, [getBooks]);

    return (
        <Container maxWidth='xl'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Book Detail</Typography>
                <img className={classes.image} src={book} alt='memories' height='60' />
            </AppBar>
            {!bookDetails.title ? <CircularProgress /> : (<Grid className={classes.container}
                container
                alignItems='stretch'
                spacing={3} style={{ color: 'white' }}>
                <Grid key={bookDetails.id} item xs={12} sm={6}>
                    <Card className={classes.card} >
                        <CardMedia className={classes.media} image={bookDetails.imageLink} title={book.title} />
                        <div className={classes.overlay} style={{ backgroundColor: 'white', color: 'black' }}>
                            {bookDetails.title && <Typography variant='h5'>{bookDetails.title} by {bookDetails.author}</Typography>}
                        </div>
                        <div className={classes.overlay2}>
                        </div>
                    </Card>
                </Grid>
                {bookDetails.content?.map((book, index) => (
                    <Grid key={book.id} item xs={12}>
                        <BookContent bookDetails={book} index={index} />
                    </Grid>
                ))}
            </Grid>)}
        </Container>
    )
}
