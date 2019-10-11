<template>
  <div class="header">
    <div class="header__content">
      TodoList
      <input @keyup.enter="handleInput"
        class="header__input"
        type="text"
        data-test="input"
        v-model.trim="inputValue"
        placeholder="TodoItem">
    </div>
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

<style lang="scss" scoped>
.header {
  line-height: 60px;
  background-color: #333;

  &__content {
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: white;
    font-size: 24px;
  }

  &__input {
    width: 360px;
    outline: none;
    line-height: 24px;
    text-indent: 10px;
    color: #333;
  }
}
</style>
