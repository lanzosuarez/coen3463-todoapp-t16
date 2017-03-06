import React, {PropTypes} from 'react';
import Panel from 'muicss/lib/react/panel';
import Form from 'muicss/lib/react/form';
import Container from 'muicss/lib/react/container';
import Input from 'muicss/lib/react/input';
import Row from 'muicss/lib/react/Row';
import Col from 'muicss/lib/react/Col';
import Button from 'muicss/lib/react/Button';
import ToDoItem from './ToDoItem';
import Status from './Status';


const ToDoAdd = (props)=>{
    console.log(props.isLoadingItem);
    return (
        <div>
            <Panel>
                <Container fluid={true} className="mui--text-center">
                    <Form onSubmit={props.onAddItem}>
                        <Row>
                            <Col md="10">
                                <Input hint="What do you want to do?"/>
                            </Col>
                            <Col md="2">
                                <Button type="submit" variant="fab" size="small" disabled={props.isLoadingItem}
                                >{props.isLoadingItem?'...':'+'}</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Panel>
            <Status onClear={props.onClear}
                    onCount={props.onCount}
                    onCompletedCount={props.onCompletedCount}
                    onGetCompleted={props.getCompleted}
                    onGetOpen={props.getOpen}
                    onGetAll={props.getAll}/>
            {props.todos.map((todo, index)=>
                <ToDoItem 
                    key={index}
                    onDelete={props.onDeleteTodo}
                    index={index}
                    todo={todo}
                    onClick={props.onClickTodo}
                    isLoadingItem={props.isLoadingItem}
                    isUpdating={props.isUpdating}
                />
            )};
        </div>
    )
}

ToDoAdd.propTypes={
    onAddItem: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onClickTodo: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onCount: PropTypes.number.isRequired,
    onCompletedCount: PropTypes.number.isRequired,
    getCompleted: PropTypes.func.isRequired,
    getOpen: PropTypes.func.isRequired,
    getAll: PropTypes.func.isRequired,
    isLoadingItem: PropTypes.bool.isRequired,
    isUpdating: PropTypes.bool.isRequired,
}


export default ToDoAdd ;