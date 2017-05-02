<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="link navbar-brand" to="/dashboard">wip.ninja</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <!-- <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li> -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Diagrams <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li class="dropdown-item"><!-- router-link class="link" to="/diagram/scc">Share Class Conversion</router-link--></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <!-- Search & Signout-->
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control input-sm" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default btn-sm">Submit</button>
          <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>
        </form>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import { firebaseApp } from '../firebaseApp'
  export default {
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    }
  }
</script>
