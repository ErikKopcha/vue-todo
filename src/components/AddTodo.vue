<template>
  <form @submit.prevent="onSubmit">

    <div class="row">
      <div class="input-field">
        <input id="task-name" type="text" class="validate"
               v-model="title" />
        <label class="" for="task-name">Todo name</label>
      </div>
    </div>
    <button class="btn waves-effect waves-light" type="submit" name="action">
      Create
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    M.updateTextFields();
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

  .input-field {
    margin-bottom: 7px;
  }

  input#task-name {
    padding: 0;
    width: 200px;
    max-width: 400px;
    margin: 0 1rem 0 0;
    min-height: 35px;
    color: white;
  }

  button {
    border: none;
    padding: 0 1.5rem;
    min-height: 35px;
    cursor: pointer;
  }
</style>