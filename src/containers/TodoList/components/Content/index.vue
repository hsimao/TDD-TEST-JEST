<template>
  <div>
    <div data-test="count">{{items.length}}</div>
    <ul>
      <li v-for="(item, index) in items"
        data-test="item"
        :key="index">
        {{item}}
        <span data-test="delete-button"
          @click="handleDelete(index)"> - </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleDelete(index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
