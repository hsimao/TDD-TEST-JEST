<template>
  <div>
    <Header @add="handleAddTodo" />
    <h1>TodoList</h1>
    <h1>list</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{todo}}</li>
    </ul>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'TodoList',
  components: {
    Header
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    handleAddTodo(val) {
      this.todos.push(val)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
