<template>
  <div class="">
    <h4>Add a task <input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="task.name">
      </div>
      <div class="form-group">
        <label>Description</label>
        <input type="text" class="form-control" v-model="task.description">
      </div>
      <div class="form-group">
        <label>Target</label>
        <input type="date" class="form-control" v-model="task.targetDate">
      </div>
      <button class="btn-sm btn-primary" @click="addTask">Submit</button>
    </div>
  </div>
</template>

<script>
  import { tasksRef, firebaseTS } from '../firebaseApp'
  export default {
    data() {
      return {
        task: {
          name: '',
          description: '',
          targetDate: '',
          status: 'backlog',
          email: '',
          timestamp: '',
          current: true,
          previousKey: ''
        },
        taskKey: '',
        showForm: false
      }
    },
    methods: {
      addTask() {
        this.task.email = this.$store.state.user.email
        this.task.timestamp = firebaseTS
        var newTask = tasksRef.push(this.task)
        this.taskKey = newTask.getKey()
      }
    }
  }
</script>
