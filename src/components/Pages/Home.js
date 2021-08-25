import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookContainer from '../BookContainer';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import useStyles from '../../styles';
import book from '../../images/book.jpg';
import Search from '../Search';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [originalBooks, setOriginalBook] = useState([]);
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
    const getBooks = async () => {
        try {
            const result = await axios.get(`https://assignment.api.staging.monomi.lt/v1/books`);
            setBooks(result.data.data);
            setOriginalBook(result.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBooks();
    }, []);
    return (
        <>
            <Container maxWidth='xl' style={{ color: 'white', paddingTop: '10px' }}>
                <AppBar className={classes.appBar} position='static' color='inherit' >
                    <Typography className={classes.heading} variant='h2' align='center'>Books</Typography>
                    <img className={classes.image} src={book} alt='Books' height='60' />
                </AppBar>
                <Search books={books} originalBooks={originalBooks} setBooks={setBooks} />
                <Grow in>
                    <Container>
                        <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                            <Grid item xs>
                                <BookContainer books={books} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    )
}