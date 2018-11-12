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
    
