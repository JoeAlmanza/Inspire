export default class Todo {
  constructor({ _id, description }) {
    this.id = _id;
    this.todo = description || []
  }

  get Template() {
    return `
    <div class="card col-12 p-0 mb-0 text-center text-primary bg-tp">
    <div class="card-header" id="cardHeader">
      <h3 class=""><u>To Do:</u>   <i class="fa fa-times" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i></h3>
    </div>
    <form class="mt-1" onsubmit="app.todoController.addTodo(event, '${this.id}')">
      <div class="form-group">
      <ul class="list-group list-group-flush">
        ${this.todo}
      </ul>
        <input type="text" class="todoForm" id="todoBody" placeholder="Enter a task...">
      </div>
        <button class="btn btn-primary mb-2 todoButton" type="submit">Add Task</button>
    </form>
  </div>
  </div>
    `
  }

}