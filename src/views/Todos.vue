<template>
  <div>
    <h2>Todo application</h2>
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
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
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