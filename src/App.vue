<template>
  <div class="app">
    <img class="app-logo" src="./assets/logo.png" />
    <AppTodo />
  </div>
</template>

<script>
import "todomvc-common/base.css";
import "todomvc-app-css/index.css";

import AppTodo from "./components/AppTodo";

export default {
  name: "App",
  components: {
    AppTodo
  }
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>

