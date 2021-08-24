import React from 'react';
import useStyles from './BookStyles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Book = ({ book }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={book.imageLink} title={book.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{book.author}</Typography>
            </div>
            <div className={classes.overlay2}>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{book.language}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{book.title}</Typography>
            <CardContent>
                <Link href={book.link}>Wiki</Link>
            </CardContent>
        </Card>
    )
}

export default Book
