export default class Todo {
  constructor({ id, todo }) {
    this.id = id;
    this.todo = todo || []
  }

  get Template() {
    return `
    <div class="card col-12 p-0 m-auto text-center bg-primary">
    <div class="card-header" id="cardHeader">
      <h3 class="text-dark"><u>To Do:</u>   <i class="fa fa-times" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></h3>
    </div>
    <form onsubmit="app.todoController.addTodo(event, '${this.id}')">
      <div class="form-group">
      <ul class="list-group list-group-flush">
        ${this.todo}
      </ul>
        <label for="todoBody" class="ml-3 mt-2 text-dark"><b>Add task...</b></label>
        <input type="text" class="" id="todoBody" placeholder="Enter your new task...">
      </div>
        <button class="btn btn-dark mb-2" type="submit">Add Task</button>
    </form>
  </div>
  </div>
    `
  }

}