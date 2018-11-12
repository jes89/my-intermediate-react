# my note

#### I can define default props when I want define default props
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.defaultProps = {
        name : 'jes'
    }
    

#### I neet to define propsTypes that's why I need to check the class always can get right parmeters or not
    
    Class MyComponent extends Component {
        something
    }
    
    MyComponent.PropTypes = {
        name : PropTypes.string, 
        name2 : PropTypes.string.isRequired
    }
