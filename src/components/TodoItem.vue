<template>
  <li :class="{done: todo.completed}">
    <label>
      <input type="checkbox"
         v-on:change="todo.completed ? todo.completed = false : todo.completed = true"
         v-bind:checked="isChecked"
      />
      <span class="ta-l">{{todo.title | uppercase}}</span>
    </label>
    <button class="waves-effect waves-light btn modal-trigger ml-a" href="#update-value" @click.prevent="showUpdateModal(todo.title)">edit</button>
    <button class="waves-effect waves-light btn red"
      v-on:click="$emit('remove-todo', todo.id)">
      <i class="material-icons">close</i>
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
    },
  mounted() {
    M.updateTextFields();
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  },
  methods: {
    showUpdateModal(value) {
      const item = document.createElement('div');
      item.id = 'update-value'
      item.className = 'modal'
      item.innerHTML = `
        <div class="modal-content">
          <h4>Edit task</h4>
          <input type="text" value="${value}">
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat btn-update">Agree</a>
        </div>
      `;

      const btnUpdate = item.querySelector('.btn-update'),
          input = item.querySelector('input');

      if (btnUpdate) {
        btnUpdate.addEventListener('click', (e) => {
          e.preventDefault();
          if (input.value.trim() !== '') {
            this.todo.title = input.value.trim();
          }

          item.remove();
        });
      }

      const options = {}
      document.getElementById('app').appendChild(item);
      M.Modal.init(item, options);
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    transition: all 1s ease;
  }

  .done {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,65,51,1) 32%, rgba(0,69,46,1) 71%, rgba(5,33,0,1) 100%);
  }
  
  input, button {
    cursor: pointer;
  }

  .ml-a {
    margin-left: auto;
    margin-right: 10px;
  }

  .ta-l {
    text-align: left;
  }
</style>