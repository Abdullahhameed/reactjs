import React from 'react'
class About extends React.Component{
    constructor(){
        super();
        // console.warn(this.props)
        // this.state={
        //     name:'  Abdullah',
        //     age:23
        // }
        // console.warn('Constructor')
    }
    componentDidMount(){
        console.warn('Mounnt');
        console.warn("Props :",this.props.name)
    }
    componentDidUpdate(){
        console.warn('Did Update prop update',this.props.name);
    }
    render(){
        return(<div>
            <h1>About Page</h1>
            <h2>{this.props.name}</h2>
            
            {/* <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2> */}
            {/* <button onClick={()=>{this.setState({name:'Abdullah Hameed'})}}>Update Now</button> */}
        </div>)
    }
}

export default About;