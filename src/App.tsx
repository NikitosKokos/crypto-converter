import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
        marginBottom: 20,
        marginTop: 20,
    },
    currencyInput: {
        minWidth: 'calc(70% - 10px)',
    },
    currencyType: {
        minWidth: '30%',
    },
    table: {
        minWidth: 650,
    },
    currencyIcon: {
      width: 18,
      height: 18,
      borderRadius: 30,
    }
}));

type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
};

function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  React.useEffect(() => {
    axios
        .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
        .then(({ data }) => {
          const coins: TCoin[] = data.Data.map((coin: any) => {
            const obj: TCoin = {
                name: coin.CoinInfo.Name,
                fullName: coin.CoinInfo.FullName,
                imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                price: coin.RAW.USD.PRICE.toFixed(3),
                volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
            };
            return obj;
          })
          setAllCoins(coins);
        });
  }, []);

  return (
      <Container maxWidth="lg">
          <Grid className={classes.root} container spacing={3}>
              <Grid item xs={8}>
                  <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                              <TableRow>
                                  <TableCell></TableCell>
                                  <TableCell align="left">Name</TableCell>
                                  <TableCell align="left">FullName</TableCell>
                                  <TableCell align="left">Price</TableCell>
                                  <TableCell align="left">Volume24Hour</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {allCoins &&
                                  allCoins.map((coin) => (
                                      <TableRow key={coin.name}>
                                          <TableCell component="th" scope="row">
                                              <img
                                                  className={classes.currencyIcon}
                                                  src={coin.imageUrl}
                                                  alt="Coin icon"
                                              />
                                          </TableCell>
                                          <TableCell align="left">{coin.name}</TableCell>
                                          <TableCell align="left">{coin.fullName}</TableCell>
                                          <TableCell align="left">${coin.price}</TableCell>
                                          <TableCell align="left">${coin.volume24Hour}</TableCell>
                                      </TableRow>
                                  ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </Grid>
              <Grid item xs={4}>
                  <Paper className={classes.paper}>
                      <div className={classes.inputBox}>
                          <FormControl className={classes.currencyInput}>
                              <TextField label="Сумма" />
                          </FormControl>
                          <FormControl className={classes.currencyType}>
                              <InputLabel shrink>Влюта</InputLabel>
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
                      <div className={classes.inputBox}>
                          <FormControl className={classes.currencyInput}>
                              <TextField label="Сумма" />
                          </FormControl>
                          <FormControl className={classes.currencyType}>
                              <InputLabel shrink>Влюта</InputLabel>
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
                      <Typography variant="h5" component="h5">
                          h1. Heading
                      </Typography>
                  </Paper>
              </Grid>
          </Grid>
      </Container>
  );
}

export default App;
