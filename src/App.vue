<template>
  <div id="app">
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
@import "~materialize-css/dist/css/materialize.min.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 700px;
  }

  html{
    background-color: #000000;
  }

  .modal, .modal .modal-footer {
    background-color: #0e0e0e;
  }

  .modal .modal-content h4,
  .modal .modal-content input{
    color: #c9c9c9;
  }
</style>
