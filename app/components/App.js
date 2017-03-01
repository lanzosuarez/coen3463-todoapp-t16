import React, {Component} from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import LogRegContainer from '../container/LogRegContainer';

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 1
        }
        console.log(this.props)
    }

    render(){
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="6" md-offset="3">
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default App;
