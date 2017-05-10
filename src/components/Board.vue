<template>
  <div>
    <h3>{{board.id}} Board</h3>
    <hr>
    <AddTask />
    <hr>
    <div class="col-md-12">
      <Task
        v-for="(task, key) in this.$store.state.tasks"
        v-bind:taskprop="task"
        v-bind:keyprop="key"
        key="index"
      />
    </div>
    <div>
      {{board}}
      {{$store.state}}
    </div>
  </div>
</template>

<script>
  import { firebaseApp, tasksRef } from '../firebaseApp'
  import AddTask from './AddTask.vue'
  import Task    from './Task.vue'
  export default {
    data() {
      return {
        board: {
          id: '',
          tasks: {
            key: '',
            task: ''
          }
        }
      }
    },
    components: {
      AddTask,
      Task
    },
    watch: {
      '$route': 'buildBoard'
    },
    methods: {
      buildBoard() {
        this.board.id    = this.$route.params.id
        this.board.tasks = this.$store.state.tasks  //needed?
      }
    },
    created() {
      this.buildBoard()
    },
    mounted() {
      //tasksRef.orderByChild("name").on('value', snap => {
      tasksRef.on('value', snap => {
        let tasks = {} //[]
        snap.forEach(task => {
          if ( task.val().current ) {
            tasks[task.getKey()] = task.val()
          }
        })
        this.$store.dispatch('setTasks', tasks)
      })
    }
  }
</script>

<!--style>
  <link rel="stylesheet" href="../../styles/kanban.css">
</style-->
