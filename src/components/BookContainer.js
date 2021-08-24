import React from 'react'
import useStyles from './ContainerStyles';
import { CircularProgress, Grid } from '@material-ui/core';
import Book from './Book'

const BookContainer = ({ books }) => {
    const classes = useStyles();
    return (
        !books?.length ? <CircularProgress /> : (
            <Grid className={classes.container}
                container
                alignItems='stretch'
                spacing={3}>
                {books?.map((book) => (
                    <Grid key={book.id} item xs={12} sm={6}>
                        <Book book={book} />
                    </Grid>
                ))
                }
            </Grid >)
    )
}

export default BookContainer
