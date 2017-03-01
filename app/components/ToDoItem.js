import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import Input from 'muicss/lib/react/input';
import Row from 'muicss/lib/react/Row';
import Col from 'muicss/lib/react/Col';
import Button from 'muicss/lib/react/Button';

function ToDoItem(){
    return (
        <Panel className="mui--bg-primary-light mui--z2">
             <Container fluid={true} className="mui--text-center">
                <Form>
                    <Row>
                        <Col md="10">
                            <Container className="mui--bg-primary-light" >
                                <h5>Yesss Hello</h5>
                            </Container>
                        </Col>
                        <Col md="2">
                            <Col>
                                <Button variant="fab" size="small" color="primary" className="mui--pull-right">x</Button>
                                <Button variant="fab" size="small" color="danger" className="mui--pull-right">/</Button>
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Panel>
    )
}

export default ToDoItem ;