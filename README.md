# my note

#### I can define default props when I want define default props.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.defaultProps = {
        name : 'jes'
    }
    

#### I need to define propsTypes that's why I need to check the class always can get right parmeters or not.
    
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
        
        this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
        
        do Something more
    }
    

#### If I don't use setState method when I change value of state, it is not rendered.
    
    this.state.idx = 1000;  // idx values is changed but the render is not working
    
    this.forceUpdate();     // I can call render method by forceUpdate but there are some isuue when I use it. 
                            //For instance, the shouldComponentUpdate method will not be called. 

    
    
#### When I bind method, it should be in the constructor. However, it is anooything to add the bind whenver I make mothed more and more. I don't have to bind my method as long as I use transform-class-propertues in babel
    
    onChangeEventHandler = (e) => {
        this.setState({message : e.target.value})
    }
    
#### the state property is able to have or be called dynamic keys in a real time
    this.setState({
        [e.target.name] = e.target.value
    })
    


