# my note


#### I can define default props when I want define default props.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.defaultProps = {
        name : 'jes'
    }
    
<br>

#### I need to define propsTypes that's why I need to check the class always can get right parmeters or not.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.propTypes = {
        name : PropTypes.string, 
        name2 : PropTypes.string.isRequired
    }

<br>

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
    
<br>

#### If I don't use setState method when I change value of state, it is not rendered.
    
    this.state.idx = 1000;  // idx values is changed but the render is not working
    
    this.forceUpdate();     // I can call render method by forceUpdate but there are some isuue when I use it. 
                            //For instance, the shouldComponentUpdate method will not be called. 

    

<br>
    
#### When I bind method, it should be in the constructor. However, it is anooything to add the bind whenver I make mothed more and more. I don't have to bind my method as long as I use transform-class-propertues in babel
    
    onChangeEventHandler = (e) => {
        this.setState({message : e.target.value})
    }

<br>
    
#### the state property is able to have or be called dynamic keys in a real time
    this.setState({
        [e.target.name] = e.target.value
    })
    
<br>

#### I'd better to use ref instead of id. Due to that fact that the broser can be some element that have same ID because renderer make a lot of components using class. As a result, ID may not be unique anymore.
    
    <input ref={(ref) => {this.targetInput = ref}} type='text' ></input>
      
    onClickEventHandler = (e) => {
        alert(this.state.message);
        this.targetInput.focus();
    }
    
    //and I can use ref keyword at Component
    <MyComponent ref={(ref) => {this.targetComponent = ref}} ></MyComponent>
    <button onClick={()=> {this.targetComponent.scrollBottom()}} ></button>
    
<br>

#### If I want copy a array and push data, I can use "spread operator"

        const numArr = [0,1,2,3,4,5,6,7,8,9];
        const moreNumArr = [...numArr, 10,11,12];
        
        or 
        
        const numArr = [0,1,2,3,4,5,6,7,8,9];
        const moreNumArr = [-3,-2,-1,...numArr];

    
<br>

#### The time that component can be updated
- the props are changed
- the states are changed
- the parents's component is rendered again
- when I call the this.forceUpdate method

<br/>

#### If I use functional component instead of class component, the clients will have better experience in rendering speed Since there's no lifecycle, state and props . it is just rendered.

<br/>

#### when I write css on a styleSheet, I can use css preprocessor using Sass, Less,Stylus etc.

    .App {...}
    .App .header {...}
    .App .logo {...}
    
    instead of that
    
    .App {
       .header {...}
       .logo {...}
    }
    
<br/>




