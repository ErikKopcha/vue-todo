<template>
  <div class="todos">
    <router-link to="/">
      <div class="text-effect small">
        <h1 class="neon" data-text="home" contenteditable></h1>
        <div class="gradient"></div>
        <div class="spotlight"></div>
      </div>
    </router-link>
    <hr>
    <div class="todos__wrapper">
      <div class="form-wrapper">
        <AddTodo
            @add-todo="addTodo"
        />

        <div class="input-field col s12">
          <select class="select-filter" v-model="filter">
            <option value="" disabled selected>Choose your option</option>
            <option name="filter-opt" value="all">All</option>
            <option name="filter-opt" value="completed">Completed</option>
            <option name="filter-opt" value="not-completed">Not Completed</option>
          </select>
          <label>Select type</label>
        </div>
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
    const elems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(elems, {});

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

<style>
  .text-effect.small, .text-effect.small .neon {
    max-height: 100px;
  }

  .text-effect.small .neon {
    font-size: 40px;
  }

  .todos {
    width: 100vw;
    height: 100vh;
    background-color: #000000;
  }

  .todos__wrapper {
    margin: 50px auto 0 auto;
    max-width: 800px;
    width: 100%;
  }

  h2 {
    padding: 0;
    margin: 0;
  }

  .form-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .input-field .select-wrapper input {color: white;}
  .input-field label { left: 0 !important; }
</style>