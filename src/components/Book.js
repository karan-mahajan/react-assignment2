import { React } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
// import axios from 'axios';
import { useHistory } from 'react-router-dom';
import bookbg from '../images/bookbg.jpg'

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        color: 'white',
        marginTop: '15px',
        marginBottom: '15px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    mainContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 200px',
        border: '1px solid black',
        justifyItems: 'start'
    },
    image: {
        height: '100%',
        width: 350
    }
})

const Book = ({ book }) => {
    const classes = useStyles();
    // const [bookId, setBookId] = useState(0);
    const history = useHistory();

    // const bookDTL = async () => {
    //     // setBookId(book.id);
    //     const result = await axios.get(`https://assignment.api.staging.monomi.lt/v1/books/${book.id}`);
    //     console.log('Book', result);
    // }

    const navigate = () => {
        history.push(`/${book.id}`);
    }
    return (
        <>

            <div className={classes.mainContainer}>
                <div onClick={navigate} style={{ cursor: 'pointer' }}>
                    <img className={classes.image} src={bookbg} alt='Book' />
                </div>
                <div>
                    <Typography className={classes.title} variant='body1'>{book.title}</Typography>
                    <Typography className={classes.title} variant='h6'>{book.author}</Typography>
                </div>
            </div>
        </>
    )
}

export default Book
