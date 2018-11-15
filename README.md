# my note


### I am allowed to define default props when I want to define default props.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.defaultProps = {
        name : 'jes'
    }
    
<br>

### I need to define propTypes that's why it is necessary to check that the class receive always right parameters or not.
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.propTypes = {
        name : PropTypes.string, 
        name2 : PropTypes.string.isRequired
    }

<br>

### I can use constructor method when I want to define defaultValue of state
    
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

### If I don't use setState method when I change value of state, it is not rendered.
    
    this.state.idx = 1000;  // idx values is changed but the render is not working
    
    this.forceUpdate();     // I can call render method by forceUpdate but there are some isuue when I use it. 
                            //For instance, the shouldComponentUpdate method will not be called. 

    

<br>
    
### When I bind method, it should be in the constructor. However, it is annoying to add the bind whenver I make mothed more and more. I don't have to bind my method as long as I use transform-class-propertues in babel
    
    onChangeEventHandler = (e) => {
        this.setState({message : e.target.value})
    }

<br>
    
### the state property is able to have or be called dynamic keys in a real time
    this.setState({
        [e.target.name] = e.target.value
    })
    
<br>

### I'd better to use ref instead of id. Due to that fact that the browser can be some element that have same ID because renderer make a lot of components using class. As a result, ID may not be unique anymore.
    
    <input ref={(ref) => {this.targetInput = ref}} type='text' ></input>
      
    onClickEventHandler = (e) => {
        alert(this.state.message);
        this.targetInput.focus();
    }
    
    //and I can use ref keyword at Component
    <MyComponent ref={(ref) => {this.targetComponent = ref}} ></MyComponent>
    <button onClick={()=> {this.targetComponent.scrollBottom()}} ></button>
    
<br>

### If I want to copy a array and push data, I can use "spread operator"

        const numArr = [0,1,2,3,4,5,6,7,8,9];
        const moreNumArr = [...numArr, 10,11,12];
        
        or 
        
        const numArr = [0,1,2,3,4,5,6,7,8,9];
        const moreNumArr = [-3,-2,-1,...numArr];

    
<br>

### The time that component can be updated
- the props are changed
- the states are changed
- the parents's component is rendered again
- when I call the this.forceUpdate method

<br/>

### If I use functional component instead of class component, the clients will have better experience in rendering speed Since there's no lifecycle, state and props . it is just rendered.

<br/>

### when I write css on a styleSheet, I can use css preprocessor using [Ssas](https://sass-guidelin.es/ko/), Less, Stylus etc.



    yarn add node-sass sass-loader 

    .App {...}
    .App .header {...}
    .App .logo {...}
    
    instead of that
    
    .App {
       .header {...}
       .logo {...}
    }
    
<br/>

### when I define className on elements, it is more simpler to use "classnames" lib

    yarn add classnames
    
    const cx = classNames.bind(styles);
    const isRed = true;
    
    <div className={cx('box','blue',{
        red : isRed
    })} ></div>    
    
<br/>


### I can make Responsive Web simply using include-media and [open-color](https://yeun.github.io/open-color/) 
    
    yarn add include-media open-color
    
<br>

### I can define elements with style through the styled-components. It makes me use css and javascript together with the fact that it will be defined in javascript source

    yarn add styled-components
    
    const Wrapper = styled.div`
        border : 1px solid black;
        display : inline-block;
        paddding : 1rem;
        border-radius : 3px;
        font-size : ${(props) => props.fontSize};
            ${props => props.big && `font-size : 2rem; padding : 2rem;`}
        &:hover {
            background : black;
            color : white;
        }
    `;

    const StyleButton = ({children,big, ...rest}) => {
        return (
            <Wrapper fontSize="1.25rem" {...rest} big={big}>
                {children}
            </Wrapper>
        );
    }

<br>
        
###  When I need "Code Splitting", I need to change some of the contents of the config files.
   
    git pull 
    git add .
    git commit "commit before eject"
    git push origin "master"
   
    yarn eject
    
    check the my root folder in my project.

### I can "destructuring assignment" in order to reduce use rate of "this"

      const {done, children, onToggle, onRemove} = this.props;
      

<br>


### By using shouldComponentUpdate, I identified improvements in performance. There is a need to check that performance can be optimized Whenever I develop the project.

    shouldComponentUpdate(nextProps, nextState){
        return this.props.done !== nextProps.done;
    }
    
    Before I add this  : Scripting 105.0ms , Rendering 49.6ms  , Painting 5.2ms    , Other 68.9ms
    After I add this   : Scripting 68.ms   , Rendering 29.1ms  , Painting 5.8ms    , Other 50.4ms 
    
    So when should I use this?
        1. when the components that will be rendering are list.
        2. when the component that will be rendering is in the list components.
        3. when there are many subcomponents and re-rendering is carried out even in situations where it should not be re-rendering.

<br>

### When I send a lot of props to subcompoents, I need to send useless props to some from parent components to subcompoents. it is one of ways to damage the readability of the code. In addition, the root js have to have all of date what will be used by its children components. I can prevent this case by using Redux. 
  
#### Things I never do when I use Redux.
1. Don't create store more than one. but I can create reduxer more than one.
2. The state is for reading only. It can lead to some bugs when Redux is working.
3. every change has to be by Redux function. the result with same parameters have to return same result always. Don't use new Date(), Math.random or something like that include DataBase Data.

<br>
    
   
### I can debug when I use redux throuh the "redux devtools" after installing "redux devtools" on chrome

    const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
    
    open Chrome and press the F12 button and click the Redux button
    
<br/>


### It is annoying to modify thress files (actions.js, actionTypes.js, reducers.js ) in redux. 
### So I can consider to apply [Ducks structure](https://github.com/erikras/ducks-modular-redux) to my project. 
### By doing so, Three files can be managed in one.
    
    DucksModule.js
    
    //actionType
    const CREATE = 'my-app/todos/CREATE'
    
    //action function
    export const create = (todo) => ({
        type : CREATE,
        todo
    })
    
    const initialState = {
        ...
    }
    
    export default function reducer(state = initialState, action){
        switch(action.type){
            reducer code
        }
    }
    
<br>

### Automating events using redux-actions
    
    yarn add redux-actions
    
    import { createAction, handleActions } from 'redux-actions';
    
    export const increment = (idx, name) => ({
        type : type.INCRMENT,
        idx,
        name
    })
    
    increment({idx : 0, name : 'jes'})
    
    //instead of this(↑) code
    
    export const increment = createAction(types.INCREMENT); 
    
    increment({idx : 0, name : 'jes'})
    //when you want to make sure what you do 
    //->  increment = createAction(types.INCREMENT, ({idx, name})=>(idx, name)); 
    
    
    switch(action.type){
        case types.INCREMENT : 
            return{
                number : state.number + 1
            }
       ...
        default : 
            return state;
    }
    
    //instead of this(↑) code
    
    const reducer = handleActions({
        INCREMENT:(state,action) => ({
            counter : state.counter + action.payplad
        })
    }, {counter : 0});
    
<br/>


### If I am allowed to file by only relative path, I have to I have to approach files like ../../../../components/myComponents sometime. ### The way to prevent this case is configuration.
    
    If I am on Window Os. Add the croess-evn.
    //Eventhough I modify NODE_PATH, the webpack is working very since the webpack use resolve and resolve also use NODE_PATH 
    
    yarn add cross-env
    
    package.json
    
    "start": "croess-evn NODE_PATH=src react-scripts start",
    "build": "croess-evn NODE_PATH=src react-scripts build",
    

### When I want to get parameters from URL. 

    yarn add query-string 
    
    import queryString from 'query-string';
    
    const About = ({location, match}) =>{

        const query = queryString.parse(location.search);
        const { idx, name, title, contents} = query;
        
        ...
    }
