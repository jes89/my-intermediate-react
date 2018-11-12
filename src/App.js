import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Button from './components/Button';
import StyleButton from './components/styleButton';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" ref={(ref) => {this.MyComponent = ref}} ></MyComponent>
        <Button>버튼</Button>
        <StyleButton big={true}>버튼</StyleButton>
      </div>
    );
  }
}

export default App;
