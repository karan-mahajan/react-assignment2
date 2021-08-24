import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container, AppBar, Typography, Card, CardMedia, Grid } from '@material-ui/core'
import useStyles from '../../styles';
import book from '../../images/book.jpg';
import BookContent from '../BookContent';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState([]);
    const { pathname } = useLocation();
    console.log("bookDetails", bookDetails.title);
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
            <Grid className={classes.container}
                container
                alignItems='stretch'
                spacing={3} style={{ backgroundColor: 'black', color: 'white' }}>
                <Grid key={bookDetails.id} item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.media} image={bookDetails.imageLink} title={book.title} />
                        <div className={classes.overlay} style={{ backgroundColor: 'red', color: 'white' }}>
                            <Typography variant='h5'>Title: {bookDetails.title}</Typography>
                        </div>
                        <div className={classes.overlay2}>
                        </div>
                        <Typography className={classes.title} variant='h6' gutterBottom>Author: {bookDetails.author}</Typography>
                    </Card>
                </Grid>
                {bookDetails.content?.map((book) => (
                    <Grid key={book.id} item xs={12} sm={6}>
                        <BookContent bookDetails={book} />
                    </Grid>
                ))
                }
            </Grid>
        </Container>
    )
}

export default BookDetails
