import React,{Component} from 'react';
import Nav from './components/Nav'
import Table from './components/Table'
class App extends Component{
  state={
    winScore:0,
    maximumRecord:0
  }
  render()
  {
    return(
      <>
      <Nav items={this.state}/>
      <Table items={this.state}/>
      </>
    )
  }
}
export default App;
