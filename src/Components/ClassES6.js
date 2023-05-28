
import React, { Component } from 'react'

export default class ClassES6 extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'object initialised'
        }
    }
    componentDidMount(){
        this.setState({name: "componentDidMount"})
        setTimeout(() => {
            this.setState({name: "componentDidUpdate"})
          }, 3000)
    }
    componentDidUpdate(prevState){
        if(prevState.name !== this.state.name){
            document.getElementById('statechange').innerHTML = "Component was just updated"
        }
        setTimeout(() => {
            document.getElementById('statechange').innerHTML = ""
          }, 2000)
    }
    componentWillUnmount() {
        console.log("Component will be unmounted!");
        alert("Component will be unmounted!");
    }
    render() {
        return (
            <div>
                <p>ES6 Class component do not support useContext switch and React hooks</p>
                
                <p style={{ backgroundColor: '#51c414'}}>{this.state.name}</p>
                <p id="statechange" style={{ backgroundColor: '#51c414'}}></p>
            </div>
        )
    }
}