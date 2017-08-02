var faith = {
  name: "Faith",
  sayName: function(){
    console.log(this);
  }
}

var faith = {
  name: "Faith",
  sayName: function(){
    console.log(this.name);
  }
}

var todoList = {
    todos: ['item 1', 'item 2', 'item 3']
};

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
      console.log('My Todos', this.todos);
    }
};

/*function displayTodos(){
  console.log('My Todos:', todos);
}*/

/* To add toddos*/
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
      console.log('My Todos', this.todos);
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    }
};

/*function addTodo(todo){
  todos.push(todo);
  displayTodos()
}*/

/* to run enter data in line 48 only. The result should look like line 49
todoList.addTodo("plunker");
My Todos['item 1', 'item 2', 'item 3', 'plunker']*/


/* To change toddos*/

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
      console.log('My Todos', this.todos);
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    },
    changeTodo: function(position, newValue){
      this.todos[position] = newValue;
      this.displayTodos()
    }
};

/* to run enter data in line 70 only. The result should look like line 71
todoList.changeTodo(0,'first');
My Todos['first', 'item 2', 'item 3', 'plunker']*/

/* To delete toddos*/

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
      console.log('My Todos', this.todos);
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    },
    changeTodo: function(position, newValue){
      this.todos[position] = newValue;
      this.displayTodos()
    },
    deleteTodo: function(position){
      this.todos.splice(position, 1);
      this.displayTodos();
    }
};

/* to run enter data in line 95 only. The result should look like line 96
todoList.deleteTodo(1);
My Todos['item 1', 'item 3']*/


