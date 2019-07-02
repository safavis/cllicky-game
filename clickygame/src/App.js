import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Nav from './components/Nav'

class App extends Component{
  state={
    winScore:0,
    looseScore:0
  }
  render()
  {
    return(
      <>
      <Nav items={this.state}/>
      <Grid container>
        <Grid item xs={4}>one</Grid>
        <Grid item xs={4}>one</Grid>
        <Grid item xs={4}>one</Grid>


      </Grid>
      </>
    )
  }
}
export default App;
