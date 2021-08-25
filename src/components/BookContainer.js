import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core';
import Book from './Book';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridColumnGap: 25,
        gridRowGap: 50,
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));


const BookContainer = ({ books }) => {
    const classes = useStyles();
    return (
        !books?.length ? <CircularProgress /> : (
            <div className={classes.container}>
                {books?.map((book) => (
                    <Book book={book} key={book.id} />
                ))
                }
            </div >)
    )
}

export default BookContainer
