import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() { 
  let todos = ProxyState.todos
  let template = ""
  todos.forEach(t => template += t.Template)
  document.getElementById("todoArea").innerHTML = template
}


function _drawRemaining() {
  let todos = ProxyState.todos
  let remaining = todos.length
  for(let i = 0; i < todos.length; i++){
    if (todos[i].completed == true) {
      remaining--
    }
  }
  document.getElementById("todoLeft").innerHTML = `To Do: ${remaining}/${todos.length} left`
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
    ProxyState.on("todos", _drawRemaining)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }

  addTodo(e, id) {
    e.preventDefault();
    let form = e.target;
    //TODO build the todo object from the data that comes into this method
    let rawTodo = {
      id: form.id.value,
      description: form.todoBody.value
    };
    try {
      todoService.addTodo(rawTodo);
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} id 
 */

  toggleTodoStatus(id) {
    try {
      todoService.toggleTodoStatus(id);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} id 
   */

  removeTodo(id) {
    try {
      todoService.removeTodo(id);
    } catch (error) {
      console.error(error)
    }
  }
}