export default class Todo {
  constructor({ _id, description, completed }) {
    this.id = _id;
    this.todo = description || [];
    this.completed = completed;
  }

  get Template() {
    if(this.completed){
      let str = this.todo;
      let res = str.strike();
      return `
    <li class="list-group-item p-0 doneText" onclick="app.todoController.toggleTodoStatus('${this.id}')"> <u> ${res} </u> <i class="fa fa-times text-danger" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></li>
    `
    }
    return `
    <li class="list-group-item p-0" onclick="app.todoController.toggleTodoStatus('${this.id}')"> <u> ${this.todo} </u> <i class="fa fa-times text-danger" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></li>
    `
  }

}