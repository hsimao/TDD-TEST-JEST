<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './containers/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
