<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>

    <router-view />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(response => response.json())
      .then(json => {this.todos = json})
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(el => el.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  },

  components: {
    TodoList, AddTodo
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 700px;
    margin: 60px auto 0 auto;
    border: 1px solid black;
  }
</style>
