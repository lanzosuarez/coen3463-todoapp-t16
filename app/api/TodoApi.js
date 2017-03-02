import axios from 'axios';
var TodoApi = {
    onAdd: (toDo)=>{
        return axios.post('/todo/add',toDo)
        .then((res)=>{
            console.log(res);
            console.log("added");
        }).catch((err)=>{
            console.log(err);
        });
    },
    onGetOwnTodo: (id)=>{ //[32312312]
        console.log(id);
        return axios.get('/api/v1/Todo')
            .then((todos)=>{
                return todos.data.map((todo)=>{
                    if(todo.user===id){
                        return todo;
                    }
                });
            });
    }
}

export default TodoApi;