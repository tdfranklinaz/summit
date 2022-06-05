<script>
  export default {
    name: "System",
    data() { 
      return { 
        systemInfo: []
      } 
    },

    mounted() {
      fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(data => (this.systemInfo = data));
    },

    methods: {
      shutdown() {
        fetch('http://localhost:4000/shutdown', {
          method: 'POST',
          body: 'Shutdown request...',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
      },

      restart() {
        fetch('http://localhost:4000/restart', {
          method: 'POST',
          body: 'Restart request...',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
      }
    }
  }
</script>

<template>
  <div class="column column-50">
    <div v-for="system in systemInfo" class="system-info">

      <!-- Title -->
      <div class="row system-info-title">
        <h3>Server</h3>
      </div>

      <!-- Data -->
      <div class="row">
        <div class="column column-33">
          <ul class="si-label">
            <li><p>Platform</p></li>
            <li><p>Release</p></li>
            <li><p>Architecture</p></li>
            <li><p>Memory</p></li>
            <li><p>Uptime</p></li>
          </ul>
        </div>
        <div class="column column-67">
          <ul class="si-data">
            <li><p>{{ system.platform }}</p></li>
            <li><p>{{ system.release }}</p></li>
            <li><p>{{ system.arch }}</p></li>
            <li><p>{{ system.memory }}</p></li>
            <li><p>{{ system.uptime }}</p></li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <ul class="si-action">
            <li><button @click="shutdown" class="button button-danger">Shut down</button></li>
            <li><button @click="restart" class="button button-secondary">Restart</button></li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  .system-info {
    background: #192024;
    border-radius: 7px;
    padding: 15px 25px;
    overflow: hidden;

    button { margin: 0; }
    p { margin: 0; }

    h3 {
      width: 100%;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: solid 1px #2D353D;
    }

    .row {
      margin: 0;
      width: 100%;

      .column {
        padding: 0;
      }
    }

    ul {
      margin: 0 0 10px 0;
      padding: 0;
      list-style: none;

      li { margin: 0 0 10px 0; }

      &.si-data > li > p {
        color: #fff;
      }

      &.si-action {
        margin-top: 10px;

        li {
          display: inline;
          margin-right: 15px;
        }
      }
    }

    h3 {
      font-size: 20px;
      color: #fff;
      letter-spacing: normal;
    }
  }
</style>