import { React } from 'react';
import useStyles from './BookStyles';
import { Card, CardMedia, Typography, Button, CardActions } from '@material-ui/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import pic1 from '../images/pic1.jpeg'
// import { CircularProgress } from '@material-ui/core';
// import BookDetails from './Pages/BookDetails';

const Book = ({ book }) => {
    const classes = useStyles();
    // const [bookId, setBookId] = useState(0);

    const bookDTL = async () => {
        // setBookId(book.id);
        const result = await axios.get(`https://assignment.api.staging.monomi.lt/v1/books/${book.id}`);
        console.log('Book', result);
    }
    return (
        <>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={pic1} title={book.title} />
                <div className={classes.overlay}>
                    <Typography variant='h5'>{book.title}</Typography>
                </div>
                <div className={classes.overlay2}>
                </div>
                <Typography className={classes.title} variant='h6' gutterBottom>{book.author}</Typography>
                <CardActions className={classes.CardActions}>
                    <Button size='medium' color='secondary' onClick={bookDTL}>
                        <Link to={`/${book.id}`}>Book Details</Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Book
