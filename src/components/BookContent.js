import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import Footer from './Footer';
import { FaBookOpen } from "react-icons/fa";

const useStyles = makeStyles({
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
});

const BookContent = ({ bookDetails, index, parentIndex }) => {
    const classes = useStyles();
    const [showDetails, setShowDetails] = useState(false);
    const changeShow = () => {
        setShowDetails(!showDetails)
    }
    return (
        <div>
            <ul></ul>
            {bookDetails.title === 'External links' ? <Footer title={bookDetails.title} content={bookDetails.content} /> : (
                <Card className={classes.root} >
                    <CardContent>
                        <div >
                            <Typography variant="h5" component="h2">
                                {parentIndex >= 0 ? `Inside Chapter : ${bookDetails.title} ` : `Chapter ${index + 1} : ${bookDetails.title}`} <FaBookOpen onClick={() => changeShow()} />
                                {/* Chapter {parentIndex ? {index + 1} : {bookDetails.title} : } {index + 1} : {bookDetails.title} <FaBookOpen onClick={() => changeShow()} /> */}
                            </Typography>
                        </div>
                        <hr />
                        {showDetails && <Typography variant="body2" component="div" style={{ color: '#a5a5a5', fontSize: '15px', fontWeight: 'bold' }} >
                            {bookDetails.content}
                        </Typography>}
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
