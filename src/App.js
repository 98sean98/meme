import React from 'react';
import {Typography, Container, makeStyles} from '@material-ui/core';
import meme from './memes/got_meme.png';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    margin: '5vh auto',
    maxWidth: 'calc(500px + 2vw)',
    height: '90vh'
  },
  heading: {
    margin: '1vh auto'
  },
  image: {
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant='h4' className={classes.heading}>You must have too much time on your hands to be here. Anyways, please enjoy a daily dose of memes.</Typography>
      <img src={meme} alt='my meme' className={classes.image}/>
    </Container>
  );
}

export default App;
