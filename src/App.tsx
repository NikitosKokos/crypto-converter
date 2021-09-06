import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    inputBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    currencyInput: {
        minWidth: 'calc(70% - 10px)',
    },
    currencyType: {
        minWidth: '30%',
    },
}));

function App() {
  const classes = useStyles();
  return (
      <Container maxWidth="lg">
          <Grid className={classes.root} container spacing={3}>
              <Grid item xs={8}>
                  <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs={4}>
                  <Paper className={classes.paper}>
                      <div className={classes.inputBox}>
                          <FormControl className={classes.currencyInput}>
                              <TextField label="Сумма" />
                          </FormControl>
                          <FormControl className={classes.currencyType}>
                              <InputLabel shrink >Влюта</InputLabel>
                              <Select
                              value={10}
                              // onChange={handleChange}
                              >
                                  <MenuItem value={10}>Ten</MenuItem>
                                  <MenuItem value={20}>Twenty</MenuItem>
                                  <MenuItem value={30}>Thirty</MenuItem>
                              </Select>
                          </FormControl>
                      </div>
                  </Paper>
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
