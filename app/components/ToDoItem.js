import React, {PropTypes} from 'react';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import Input from 'muicss/lib/react/input';
import Row from 'muicss/lib/react/Row';
import Col from 'muicss/lib/react/Col';
import Button from 'muicss/lib/react/Button';

function ToDoItem(props){
    return (
        <Panel className="mui--bg-primary-light mui--z2">
             <Container fluid={true} className="mui--text-center">
                <Form>
                    <Row>
                        <Col md="10">
                            <Container className="mui--bg-primary-light" >
                                <h5 style={{textDecoration:(props.todo.isCompleted?'line-through':'none')}}
                                    >{props.todo.name}</h5>
                            </Container>
                        </Col>
                        <Col md="2">
                            <Col>
                                <Button variant="fab" size="small" color="primary" className="mui--pull-right" name="delete"
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            props.onDelete(props.index,props.todo)}
                                        }>x</Button>
                                <Button variant="fab" size="small" color="danger" className="mui--pull-right" name="edit">/</Button>
                                <Button variant="fab" size="small" color="danger" className="mui--pull-right" name="done"
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            props.onClick(props.todo, props.index);
                                        }}
                                        >y</Button>
                            </Col>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Panel>
    )
}

ToDoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
    onDelete: PropTypes.func.onDelete,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}


export default ToDoItem ;