<template>
  <div class="col-md-4">
    <div class="task-card">
      <h4 class="card-title">{{key}} - {{task.name}}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Description:
          <input type="text" class="card-text" v-bind:placeholder="task.description" v-model.lazy="task.description">
        </li>
        <li class="list-group-item">Status:
          <input type="text" class="card-text" v-bind:placeholder="task.status" v-model.lazy="task.status">
        </li>
        <li class="list-group-item">Target:
          <input type="text" class="card-text" v-bind:placeholder="task.targetDate" v-model.lazy="task.targetDate">
        </li>
        <li class="list-group-item">Hero:
          <input type="text" class="card-text" v-bind:placeholder="task.email" v-model.lazy="task.email">
        </li>
        <li class="list-group-item">
          <button class="btn-sm btn-primary" @click="updateDescription">Save</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { tasksRef, firebaseTS } from '../firebaseApp'
  export default {
    props: ['taskprop','keyprop'],
    data() {
      return {
        key: '',
        task: {
          name: '',
          description: '',
          targetDate: '',
          status: '',
          email: '',
          timestamp: '',
          current: '',
          previousKey: ''
        },
        showForm: false
      }
    },
    created() {
      this.initTask()
    },
    methods: {
      initTask() {
        this.key  = this.keyprop
        this.task = this.taskprop
      },
      updateDescription() {
        tasksRef.child(this.key).child('current').set(false)
        //console.log('updTask', tasksRef.child(this.key))

        this.task.timestamp = firebaseTS
        this.task.previousKey = this.key
        var newTask = tasksRef.push(this.task)
      }
    }
  }
</script>

<style>
  .card-title {
    font-weight: bolder;
  }
  .card-text {
    font-weight: normal;
  }
  .list-group-item {
    font-weight: bolder;
  }
</style>
