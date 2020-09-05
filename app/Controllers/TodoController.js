import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() { 
  let template = ""
  let todos = ProxyState.todos
  todos.forEach(t => template += t.Template)
  document.getElementById("todoArea").innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    let form = e.target;
    //TODO build the todo object from the data that comes into this method
    let rawTodo = {
      _id: form.id.value,
      description: form.todoBody.value
    };
    try {
      todoService.addTodo(rawTodo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}