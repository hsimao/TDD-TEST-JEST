<template>
  <div>
    <input @keyup.enter="handleInput" type="text" data-test="input" v-model.trim="inputValue">

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleInput() {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)

        this.inputValue = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
