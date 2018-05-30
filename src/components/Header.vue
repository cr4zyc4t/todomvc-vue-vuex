<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
  </header>
</template>

<script>
export default {
  name: "Header",
  data: function(){
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo(e) {
      // e.preventDefault();
      if (this.newTodo.length > 0) {
        this.$store.commit("addTask", { text: this.newTodo });
        this.newTodo = '';
      }
    }
  },
};
</script>