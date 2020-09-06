export default class Todo {
  constructor({ _id, description, completed }) {
    this.id = _id;
    this.todo = description || [];
    this.completed = false
  }

  get Template() {
    if(this.completed){
      let str = this.todo;
      let res = str.strike();
      return `
    <li class="list-group-item p-0" onclick="app.todoController.toggleTodoStatus('${this.id}')">    ${res}  -  <i class="fa fa-times text-danger" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></li>
    `
      
    }
    return `
    <li class="list-group-item p-0" onclick="app.todoController.toggleTodoStatus('${this.id}')">    ${this.todo}  -  <i class="fa fa-times text-danger" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></li>
    `
  }

}