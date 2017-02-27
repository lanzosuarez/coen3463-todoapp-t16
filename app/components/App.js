import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import LogRegContainer from './LogRegContainer';

class App extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count: 1
    //     }
    //     this.increment = this.increment.bind(this)
    // }

    // increment(){
    //     var temp = this.state.count
    //     this.setState({
    //         count: temp+1
    //     })
    // }

    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="6" md-offset="3">
                        <LogRegContainer/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App;