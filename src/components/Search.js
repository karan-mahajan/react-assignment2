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
        const newBooks = originalBooks.filter((book) => book?.title.includes(value));
        if (newBooks?.length > 0) {
            setBooks(newBooks);
        }
    }
    return (
        <form className={classes.root} noValidate autoComplete="off" style={{ backgroundColor: 'white', marginBottom: '20px' }}>
            <TextField id="outlined-size-normal" color="primary" label="Book Name" variant="outlined" name='bookName' onChange={(e) => filterBooks(e)} />
        </form>
    )
}

export default Search
