import {React, useState} from 'react'; //add state to functional components
import { Container, Grid, Paper, TextField, Button  } from '@mui/material';

function App() { //call the function
  const [value, setValue] = useState(''); //state variable named value , function named setValue 

  const handleButtonClick = (buttonValue) => { {/* represents the value of the button that was clicked */}
    if (buttonValue === 'AC') {
      setValue('');
    } else if (buttonValue === 'DE') {
      setValue(value.slice(0, -1));
    } else if (buttonValue === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else {
      setValue(value + buttonValue);
    }
  };

  const buttonColors = {
    AC: 'error', //red
    DE: 'error',
    '.': 'secondary', //purple
    '/': 'success', //green
    '7': 'primary',
    '8': 'primary',
    '9': 'primary',
    '*': 'success',
    '4': 'primary',
    '5': 'primary',
    '6': 'primary',
    '+': 'success',
    '1': 'primary',
    '2': 'primary',
    '3': 'primary',
    '-': 'success',
    '00': 'secondary',
    '0': 'primary',
    '=': 'success',
  };

  const buttons = Object.keys(buttonColors); //btn array


  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={6} >
            <form>
              <TextField type="text" value={value} fullWidth style={{backgroundColor: 'white', fontWeight:'bolder' }}/>
              <Grid container spacing={1} style={{ paddingTop: '10px' }} >
                {buttons.map((button, index) => ( //2 para (btn - current element of the buttons array)
                  <Grid item key={index} xs={3} > {/* index- current value in arr */}
                    <Button
                      variant="contained"
                      color={buttonColors[button]}
                      fullWidth
                      onClick={() => handleButtonClick(button)}
                    >
                      {button}  {/* text displayed on the btn*/}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </ Container>
  );
}

export default App;