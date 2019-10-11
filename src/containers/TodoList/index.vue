<template>
  <div>
    <Header @add="handleAddTodo" />
    <h1>TodoList</h1>
    <h1>list</h1>
    <Content :items="todos"
      @delete="handleDelete" />
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'

export default {
  name: 'TodoList',
  components: {
    Header,
    Content
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    handleAddTodo(val) {
      this.todos.push(val)
    },
    handleDelete(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
