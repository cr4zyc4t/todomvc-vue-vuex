<template>
  <section class="todoapp">
    <Header />
    <TaskList />
    <Footer />
  </section>
</template>
<script>
import Header from "./Header";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default {
  name: "AppTodo",
  components: {
    Header,
    TaskList,
    Footer
  }
};
</script>

<style scoped>
.todoapp {
  text-align: left;
}
</style>
