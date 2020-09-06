export default class Todo {
  constructor({ _id, description }) {
    this.id = _id;
    this.todo = description || []
  }

  get Template() {
    return `
    <li class="list-group-item p-0"><input type="checkbox" class="form-check-input" id="exampleCheck1">  -  ${this.todo}  -  <i class="fa fa-times text-danger" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></li>
    `
  }

}