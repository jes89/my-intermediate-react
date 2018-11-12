# my note

#### I can define default props when I want define default props.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.defaultProps = {
        name : 'jes'
    }
    

#### I neet to define propsTypes that's why I need to check the class always can get right parmeters or not.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.propTypes = {
        name : PropTypes.string, 
        name2 : PropTypes.string.isRequired
    }

#### I can use constructior method when I want to define defaultValue of state
    
    this.state = {
        idx : 0
    }
    
    or
    
    constructor(props){
       
       super(props);
       
       this.state = {
            idx : 0
        }
        
        do Something more with state
    }
    

#### IF I don't use setState method when I change value of state, it is not rendered.
    
    this.state.idx = 1000;  // idx values is changed but the render is not working
    
    this.forceUpdate();     // I can call render method by forceUpdate but there are some isuue when I use it. For instance, 
                            // the shouldComponentUpdate method is not called. 

    
    
    
