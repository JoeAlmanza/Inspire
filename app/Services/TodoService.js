import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'joe/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    console.log(res);
    ProxyState.todos = res.data.data.map(t => new Todo(t))
    //TODO Handle this response from the server
  }

  async addTodo(rawTodo) {
    let res = await api.post(url, rawTodo)
    console.log(res);
    let todo = new Todo(res.data.data)
    ProxyState.todos = [...ProxyState.todos, todo]
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(id) {
    let todo = await ProxyState.todos.find(t => t.id == id);
    console.log(todo)
    if(todo.completed){
    todo.completed = false
    } else {
    todo.completed = true
    }
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    let res = await api.put(url + id, todo);
    console.log(res);
    ProxyState.todos = ProxyState.todos
    //TODO how do you trigger this change
  }

  async removeTodo(id) {
    let res = await api.delete(url + id)
    ProxyState.todos = ProxyState.todos.filter(t => t.id !== id)
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;