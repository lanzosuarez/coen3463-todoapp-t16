import React from 'react';
import ToDoAdd from '../components/ToDoAdd';
import ToDoItem from '../components/ToDoItem';
import TodoApi from '../api/TodoApi';
import AuthApi from '../api/AuthApi';
import _ from 'lodash';

class ToDoContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleOnAddItem = this.handleOnAddItem.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnComplete = this.handleOnComplete.bind(this);
        this.state = {
            items:[],
            user: '',
        }
        
    }

    componentWillMount(){
        console.log("hello")
        let lastUserState = this.state.user; //get last state of user
        let lastItemState = this.state.items; //get last state of items
        if(lastUserState===''){
            AuthApi.onGetUser().then((res)=>{
                if(res.data.response){
                    this.setState({
                        user: res.data.response._id
                    });
                    //then getowntodos
                    TodoApi.onGetOwnTodo(res.data.response._id)
                    .then((todos)=>{
                        console.log(todos);
                        this.setState({
                            items:[...lastItemState,...todos.todos]
                        });
                    });
                }else{
                    window.location = '/';
                }
            });
        }   
    }   

    handleOnDelete(index,todo){
        console.log(todo);
        let lastItemState = this.state.items;
        lastItemState.splice(index,1);
        this.setState({
            items: [...lastItemState]
        });
        TodoApi.onDelete(todo._id);
    }

    handleOnAddItem(e) {
        e.preventDefault();
        var lastState = this.state.items; //get last state of item
        let toDo = { //create a todo object to be saved
            name: e.target.elements[0].value,
            user: this.state.user,
            createDate: Date.now(),
        }
      
        TodoApi.onAdd(toDo).then(res=>{
            if(res.data.success===true){
                this.setState({ //update items
                    items :[...lastState,Object.assign({},res.data.response)]
                });
                return;
            }
            alert(res.data.response);
        }); 
    }

    linetrough(target, flag){
        if(flag){
            target.style.textDecoration='line-through';
            return;
        }
         target.style.textDecoration='none';      
    }

    handleOnComplete(todo,index){
        TodoApi.onEdit(todo._id,"isCompleted",!todo.isCompleted)
            .then(res=>{
                console.log(res);
                if(res.data.success){
                    let lastItems = this.state.items;
                    let newItems = lastItems.splice(index,1,res.data.response);
                    this.setState({
                        items: [...newItems]
                    });
                    return;
                }
                alert(res.data.response);
            });
    }

    loopTodo(){
        let displayTodo = [];
        for(let x=0; x<this.state.items.length;x++){
            displayTodo.push(
                <ToDoItem 
                    key={x}
                    index={x}
                    todo={this.state.items[x]}
                    onDelete={this.handleOnDelete}
                />
            );
        }   
    
        return displayTodo;
    }
    
    render(){
        let displayTodo = this.loopTodo();
        return(
            <ToDoAdd
                onAddItem= {this.handleOnAddItem}
                todos= {this.state.items}
                onDeleteTodo= {this.handleOnDelete}
                onClickTodo= {this.handleOnComplete}
            />
        );
    }
}



export default ToDoContainer;