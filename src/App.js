import React, { useState } from 'react';
import { Typography, Container, Paper, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import spinner from './Spinner-1.3s-200px.svg';
import backupMeme from './memes/got_meme.png';
const backupTitle = 'Think you have a chance?';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    margin: '5vh auto',
    maxWidth: 'calc(500px + 2vw)',
    height: '90vh'
  },
  meme: {
    margin: '1vh auto'
  },
  text: {
    margin: '1vh auto'
  },
  image: {
    width: '100%'
  }
})

function App () {
  const classes = useStyles();
  const [meme, setMeme] = useState(backupMeme);
  const [title, setTitle] = useState(backupTitle);
  const [memeCounter, setMemeCounter] = useState(1);
  const [loading, setLoading] = useState(false);

  const getMeme = () => {
    setLoading(true);
    axios.get('https://meme-api.herokuapp.com/gimme').then((response) => {
      setMeme(response.data.url);
      setTitle(response.data.title);
      setMemeCounter(memeCounter + 1);
      setLoading(false);
    }).catch((error) => {
      console.error(error);
    })
  };

  const renderMeme = () => {
    if (loading) return (
        <img src={spinner} alt='loading meme' />
    )
    return (
        <div>
          <img src={meme} alt='my meme' className={classes.image}/>
          <Typography variant='h6' className={classes.text}>{title}</Typography>
        </div>
    )
  }

  return (
    <Container className={classes.container}>
      <Typography variant='h5' className={classes.text}>Too much time on your hands to be here 🤦</Typography>
      <Paper className={classes.meme}>
        {renderMeme()}
      </Paper>
      <Button color='primary' onClick={getMeme}>Give me more</Button>
      <Typography variant='body1'>You have wasted {memeCounter} meme(s) worth of your life 😂</Typography>
    </Container>
  );
}

export default App;
