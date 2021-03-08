<template>
  <form @submit.prevent="onSubmit">
    <input placeholder="Todo name" type="text" v-model="title">
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo);
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    padding: 0 1rem;
    width: 200px;
    max-width: 400px;
    margin-right: 1rem;
    min-height: 35px;
    border: none;
    background: rgb(238, 238, 238);
  }

  button {
    border: none;
    padding: 0 1.5rem;
    min-height: 35px;
    cursor: pointer;
  }
</style>