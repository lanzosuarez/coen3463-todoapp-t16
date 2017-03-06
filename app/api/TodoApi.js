import axios from 'axios';
var TodoApi = {
    onAdd: toDo=>{
        return axios.post('/todo',toDo)
        .then(res=>{
            return res;
        }).catch(err=>{
            throw(err);
        });
    },
    onGetOwnTodo: id=>{ //[32312312]
        return axios.get('/todo')
            .then(todos=>{
                return todos.data;
            }).catch(err=>{
                throw(err);
            });
    },

    onDelete: id=>{
        console.log(id);
        return axios.delete('/todo/'+id)
            .then(todo=>{
                if(todo.data.success===true){
                    alert("Deleted");
                    return;
                }
                console.log(todo.data.response);

            }).catch(err=>{
                throw(err);
            });
    },
    onEdit: (id,field,value)=>{
        console.log(value);
        return axios.patch('/todo/'+id+'/'+field+'/'+value)
            .then(res=>{
                return res;
            }).catch(err=>{
                throw(err);
            });
    }
}

export default TodoApi;