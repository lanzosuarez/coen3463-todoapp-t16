import React from 'react';
import ToDoAdd from '../components/ToDoAdd';
import ToDoItem from '../components/ToDoItem';

class ToDoContainer extends React.Component{
    render(){
        return(
            <div>
                <ToDoAdd />
                <ToDoItem />
            </div>
        )
    }
}


export default ToDoContainer;