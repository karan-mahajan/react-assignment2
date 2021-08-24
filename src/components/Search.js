import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Search = ({ books, originalBooks, setBooks }) => {
    const classes = useStyles();
    const filterBooks = (e) => {
        let value = e.target.value;
        const ab = originalBooks.map((book) => {
            if (book.title.indexOf(value) > -1) {
                return book;
            }
            return '';
        })
        const newBooks = ab.filter((book) => book.title ? book.title.indexOf(value) > -1 : null);
        if (newBooks.length) {
            console.log(newBooks);
            setBooks(newBooks);
        }
        else {
            // setBooks(originalBooks);
            setBooks(newBooks);
        }
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" name='bookName' onChange={(e) => filterBooks(e)} />
        </form>
    )
}

export default Search
