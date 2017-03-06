import React from 'react';
import ToDoAdd from '../components/ToDoAdd';
import ToDoItem from '../components/ToDoItem';
import Header from '../components/Header';
import TodoApi from '../api/TodoApi';
import AuthApi from '../api/AuthApi';
import _ from 'lodash';

class ToDoContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleOnAddItem = this.handleOnAddItem.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnComplete = this.handleOnComplete.bind(this);
        this.handleClearList = this.handleClearList.bind(this);
        this.state = {
            items:[],
            user: '',
            completedCount: 0
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
                        user: res.data.response//access the user using res.data.response.firstName, res.data.reponse.lastName,res/data.username for email
                    });
                    //then getowntodos
                    TodoApi.onGetOwnTodo(res.data.response._id)
                    .then((todos)=>{
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
        TodoApi.onDelete(todo._id).then(res=>{
            if(res.data.success){
                lastItemState.splice(index,1);
                this.setState({
                    items: [...lastItemState]
                });
                return;
            }
            alert(res.data.response);
        });
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
            if(res.data.success){
                this.setState({ //update items
                    items :[...lastState,Object.assign({},res.data.response)]
                });
                return;
            }
            alert(res.data.response);
        }); 
    }

    handleOnComplete(todo,index){
        let lastItems = this.state.items;
        //lastItems[index].completed = !lastItems[index].completed;
        TodoApi.onEdit(todo._id,"isCompleted",!todo.isCompleted)
            .then(res=>{
                if(res.data.success){
                    lastItems.splice(index,1,res.data.response);
                    this.setState({
                        items: [...lastItems],
                        completedCount: todo.isCompleted ? this.state.completedCount - 1 : this.state.completedCount + 1
                    });
                    return;
                }
                alert(res.data.response);
            });
    }

    handleClearList(e){
        this.setState({items:[]});
    }

    render(){
        return(
            <div>
                <Header />
                <ToDoAdd
                    onAddItem= {this.handleOnAddItem}
                    todos= {this.state.items}
                    onDeleteTodo= {this.handleOnDelete}
                    onClickTodo= {this.handleOnComplete}
                    onClear= {this.handleClearList}
                    onCount={this.state.items.length}
                    onCompletedCount={this.state.completedCount}
                />
            </div>
        );
    }
}

export default ToDoContainer;