import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookContainer from '../../components/BookContainer';
import { AppBar, Typography, makeStyles } from '@material-ui/core'
import book from '../../images/book.jpg';
import Search from '../../components/Search';

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
            <div style={{ padding: 0, margin: 50 }}>
                <AppBar className={classes.appBar} position='static' color='inherit' >
                    <Typography className={classes.heading} variant='h2' align='center'>Books</Typography>
                    <img className={classes.image} src={book} alt='Books' height='60' />
                </AppBar>
                <Search books={books} originalBooks={originalBooks} setBooks={setBooks} />
                <BookContainer books={books} />
            </div>
        </>
    )
}