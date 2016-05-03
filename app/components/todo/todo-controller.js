app.controller('TodoController', function(TodoService){
	var tc = this;
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE  
    tc.addTodo = function(todo){
        tc.todos.push(todo);
        tc.newTodo = {};
		TodoService.saveTodos(tc.todos);
    }
    
    tc.acceptTodo = function(todo){
        todo.accepted = true;
    }

    tc.removeTodo = function(todo, index){
        tc.todos.splice(index, 1);
    }

})