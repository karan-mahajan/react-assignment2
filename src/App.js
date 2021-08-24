import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookContainer from './components/BookContainer';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import useStyles from './styles';
import book from './images/book.jpg'

function App() {
  const [books, setBooks] = useState([]);
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
      console.log(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>Books</Typography>
          <img className={classes.image} src={book} alt='memories' height='60' />
        </AppBar>
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <BookContainer books={books} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
