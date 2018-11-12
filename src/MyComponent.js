import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBox from './ScrollBox';

class MyComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        
        return (
          <div>
              <ScrollBox ref={(ref)=> this.scrollBox = ref} ></ScrollBox>
              <button onClick={()=> {this.scrollBox.scrollBottom()}} >하단으로</button>
              
          </div>
        );
    }
}

MyComponent.propTypes = {
    name : PropTypes.string.isRequired
}

export default MyComponent;