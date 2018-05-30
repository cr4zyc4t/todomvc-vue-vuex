<template>
  <footer class="footer" v-show="todos.length">
    <span class="todo-count">
      <strong v-text="remaining"></strong> {{pluralize('item', remaining)}} left
    </span>
    <ul class="filters">
      <li>
        <a href="#" :class="{selected: visibility == 'all'}" @click="setFilter('all')">All</a>
      </li>
      <li>
        <a href="#" :class="{selected: visibility == 'active'}" @click="setFilter('active')">Active</a>
      </li>
      <li>
        <a href="#" :class="{selected: visibility == 'completed'}" @click="setFilter('completed')">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
      Clear completed
    </button>
  </footer>
</template>

<script>
import pluralize from "pluralize";

export default {
  name: "Footer",
  computed: {
    visibility() {
      return this.$store.state.visibilityFilter;
    },
    todos() {
      return this.$store.state.todos;
    },
    filteredTodos() {
      return this.$store.state.todos;
    },
    remaining() {
      return this.$store.getters.remaining;
    }
  },
  methods: {
    pluralize,
    removeCompleted() {},
    setFilter(filter) {
      this.$store.commit("setFilter", filter);
    }
  }
};
</script>
