<template>
  <div>
    <h2>Pages</h2>
    <router-link to="/">Home</router-link>
    <hr>

    <div class="form-wrapper">
      <AddTodo
          @add-todo="addTodo"
      />
      <select class="select-filter" v-model="filter">
        <option name="filter-opt" value="all">All</option>
        <option name="filter-opt" value="completed">Completed</option>
        <option name="filter-opt" value="not-completed">Not Completed</option>
      </select>
    </div>

    <hr>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json
          this.loading = false
        }, 1000)
      })
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'all':
          return this.todos
          break;
        case 'completed':
          return this.todos.filter(i => i.completed)
          break;
        case 'not-completed':
          return this.todos.filter(i => !i.completed)
          break;
      }
    }
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
    TodoList, AddTodo, Loader
  }
}
</script>

<style scoped>
  .form-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  .select-filter {
    margin-right: 15px;
    width: 130px;
  }
</style>