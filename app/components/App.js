import React from 'react'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 1
        }
        this.increment = this.increment.bind(this)
    }

    increment(){
        var temp = this.state.count
        this.setState({
            count: temp+1
        })
    }

    render(){
        console.log(this.state.greet)
        return(
            <div>
            <p>{this.state.count}</p>
            <button type="button" onClick={this.increment}>increment</button>
                <p>Hello bebe!</p>
            </div>
        );
    }
}

export default App;