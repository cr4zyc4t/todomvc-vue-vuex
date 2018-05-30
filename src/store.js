import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let idSeq = 1;

let store = new Vuex.Store({
  state: {
    todos: [{
      id: 0,
      text: 'Task1',
      completed: false
    }],
    visibilityFilter: 'all'
  },
  getters: {
    filteredTodos: (state) => {
      if (state.visibilityFilter === 'all') {
        return state.todos;
      } else if (state.visibilityFilter === 'completed') {
        return state.todos.filter(todo => todo.completed);
      }
      return state.todos.filter(todo => !todo.completed);
    },
    remaining: (state) => {
      return state.todos.filter(todo => !todo.completed).length;
    }
  },
  mutations: {
    addTask: (state, { text }) => {
      state.todos.push({
        id: idSeq,
        text: text,
        completed: false
      });
      idSeq++;
    },
    toggleTask: (state, task) => {
      task.completed = !task.completed;
    },
    setFilter(state, filter) {
      state.visibilityFilter = filter;
    }
  }
});

export default store;
