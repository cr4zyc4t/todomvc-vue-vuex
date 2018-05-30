<template>
  <section class="main" v-show="todos.length">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed, editing: todo == editedTodo}">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="todo.completed">
          <label @dblclick="editTodo(todo)">{{todo.text}}</label>
          <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
        <input class="edit" type="text" v-model="todo.text" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "TaskList",
  data: function() {
    return {
      allDone: false,
      editedTodo: null
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filteredTodos() {
      return this.$store.getters.filteredTodos;
    }
  },
  methods: {
    editTodo(todo) {
      this.editedTodo = todo;
    },
    doneEdit(todo){

    },
    cancelEdit(todo){
      this.editedTodo = null;
    },
    onTaskClick(taskId, e) {
      e.preventDefault();
      console.log(taskId);
    },
    removeTodo(todo) {
      console.log(todo);
    }
  },
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};
</script>

