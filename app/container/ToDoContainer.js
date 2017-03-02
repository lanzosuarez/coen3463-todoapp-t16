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
        this.state = {
            items:[],
            user: ''
        }
    }

    handleOnAddItem(e) {
        e.preventDefault();
        var lastState = this.state.items; //get last state of item
        let toDo = { //create a todo object to be saved
            name: e.target.elements[0].value,
            user: this.state.user,
            createDate: Date.now(),
        }
        this.setState({ //update items
            items :[...lastState,Object.assign({},toDo)]
        });
        TodoApi.onAdd(toDo); //then request to add todo
    }

    getMonth(index){
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[index];
    }

    componentDidMount(){
        let lastUserState = this.state.user; //get last state of user
        let lastItemState = this.state.items; //get last state of items
        if(lastUserState!==''){
            return;
        }else{
            AuthApi.onGetUser().then((res)=>{
                if(res.data.response){
                    this.setState({
                        user: res.data.response._id
                    });
                    //then getowntodos
                    TodoApi.onGetOwnTodo(res.data.response._id)
                    .then((todos)=>{
                        this.setState({
                            items:[...lastItemState,...todos]
                        })
                    });
                }else{
                    this.props.router.push('/');
                
                }
            });
        }
           
    }       
    
    render(){
        let displayTodo = [];
        for(let x=0; x<this.state.items.length;x++){
            displayTodo.push(
                <ToDoItem 
                    key={x}
                    name={this.state.items[x].name}
                />
            );
        }
    
        return(
            <div>
                <ToDoAdd
                    onAddItem = {this.handleOnAddItem}
                />
                {displayTodo}
            </div>
        );
    }
}



export default ToDoContainer;