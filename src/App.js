import React, {Component} from 'react';
import Menu from './hoc/Menu/Menu'
import Page from './hoc/Page/Page'

class App extends Component{
  state ={
    pageNum : 0
  };

  _renderPage = (num) => {
    this.setState({pageNum:num});
  }

  render(){
    return (
      <div>
        <Menu _renderPage={this._renderPage}/>
        <Page page={this.state.pageNum} />
      </div>
    );
  }
}

export default App;