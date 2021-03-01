<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" 
        v-on:change="todo.completed ? todo.completed = false : todo.completed = true"
        v-bind:checked="isChecked"
      />
      <strong>{{index+ 1}}</strong>
      {{todo.title}}
    </span>
    <button class="rm" 
      v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button >
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: Number,
      isChecked: Boolean
    }
  }
</script>

<style scoped>
  li {
    border: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem; 
  }

  .rm {
    width: 20px;
    height: 20px;
    background-color: red;
    color: #ffffff;
    border-radius: 50%;
    font-weight: bold;
    border: none;
  }

  .done {
    text-decoration: line-through;
  }

  button {
    cursor: pointer;
  }
</style>